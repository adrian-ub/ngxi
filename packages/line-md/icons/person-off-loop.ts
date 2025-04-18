import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdPersonOffLoopIcon],svg[line-md-person-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdPersonOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.5s" values="36;0"></svg:animate></svg:path><svg:g stroke-dasharray="28" stroke-dashoffset="28" transform="rotate(45 12 12)"><svg:path stroke="#000" d="M0 11h24"></svg:path><svg:path d="M0 13h22"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate></svg:path><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdPersonOffLoop0)"></svg:rect>`,
})
export class LineMdPersonOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
