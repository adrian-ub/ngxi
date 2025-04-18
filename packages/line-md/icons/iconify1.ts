import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdIconify1Icon],svg[line-md-iconify1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0"><svg:path d="M9.5 9c0 -0.52 -0.48 -1 -1 -1c-0.52 0 -1 0.48 -1 1v1.44c0 0.52 0.48 1.06 1 1.06c0.52 0 1 -0.48 1 -1v-1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;1"></svg:animate></svg:path><svg:path d="M16.5 9c0 -0.52 -0.48 -1 -1 -1c-0.52 0 -1 0.48 -1 1v1.44c0 0.52 0.48 1.06 1 1.06c0.52 0 1 -0.48 1 -1v-1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.85s" dur="0.15s" values="0;1"></svg:animate></svg:path><svg:path fill-rule="evenodd" d="M12 18c3.13 0 5.33 -2.88 5 -3.5c-0.33 -0.63 -1.5 1.5 -5 1.5c-3.5 0 -4.69 -2.13 -5 -1.5c-0.31 0.63 1.88 3.5 5 3.5Z" clip-rule="evenodd"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;1"></svg:animate></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdIconify1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
