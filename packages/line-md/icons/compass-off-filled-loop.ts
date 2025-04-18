import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassOffFilledLoopIcon],svg[line-md-compass-off-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassOffFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#000" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="1.1s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#fff" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.5s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassOffFilledLoop0)"></svg:rect>`,
})
export class LineMdCompassOffFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
