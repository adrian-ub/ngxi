import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdGithubTwotoneIcon],svg[line-md-github-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M15 4.5c-0.39 -0.1 -1.33 -0.5 -3 -0.5c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5v4h6v-4c0 -0.63 0.15 -1.96 -0.5 -2.5c1.39 -0.13 2.48 -0.58 3.5 -1.5c1.02 -0.92 1.5 -2.31 1.5 -4.5c0 -1.5 -0.25 -2.5 -1 -3.5c0.29 -0.78 0.34 -2 0 -3c-1.56 0 -2.97 1.07 -3.5 1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdGithubTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
