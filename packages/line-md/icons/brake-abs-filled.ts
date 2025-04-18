import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeAbsFilledIcon],svg[line-md-brake-abs-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBrakeAbsFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M4 6h16c1.26 1.67 2 3.75 2 6c0 2.25 -0.74 4.33 -2 6h-16c-1.26 -1.67 -2 -3.75 -2 -6c0 -2.25 0.74 -4.33 2 -6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M7.2 16v-3.2h-1.6v3.2h-1.6v-6.4c0 -0.42 0.17 -0.83 0.47 -1.13c0.3 -0.3 0.71 -0.47 1.13 -0.47h1.6c0.88 0 1.6 0.72 1.6 1.6v6.4h-1.6ZM7.2 11.2v-1.6h-1.6v1.6h1.6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.8s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M13.2 12c0.64 0 1.2 0.56 1.2 1.2v1.2c0 0.21 -0.04 0.42 -0.12 0.61c-0.08 0.19 -0.2 0.37 -0.35 0.52c-0.15 0.15 -0.32 0.27 -0.52 0.35c-0.19 0.08 -0.4 0.12 -0.61 0.12h-3.2v-8h3.2c0.42 0 0.83 0.17 1.13 0.47c0.3 0.3 0.47 0.71 0.47 1.13v1.2c0 0.64 -0.56 1.2 -1.2 1.2ZM12.8 12.8h-1.6v1.6h1.6v-1.6ZM12.8 9.6h-1.6v1.6h1.6v-1.6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="2s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M20 9.6v-1.6h-3.2c-0.88 0 -1.6 0.72 -1.6 1.6v1.6c0 0.42 0.17 0.83 0.47 1.13c0.3 0.3 0.71 0.47 1.13 0.47h1.6v1.6h-3.2v1.6h3.2c0.88 0 1.6 -0.72 1.6 -1.6v-1.6c0 -0.42 -0.17 -0.83 -0.47 -1.13c-0.3 -0.3 -0.71 -0.47 -1.13 -0.47h-1.6v-1.6h3.2Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="2.2s" dur="0.2s" values="0;1"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBrakeAbsFilled0)"></svg:rect>`,
})
export class LineMdBrakeAbsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
