import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMonitorSmallFilledIcon],svg[line-md-monitor-small-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16h4v0h-4z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M10 16h4v0h-4z;M10 16h4v6h-4z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 17h-8v-14h16v14Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 21h3M12 21h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdMonitorSmallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
