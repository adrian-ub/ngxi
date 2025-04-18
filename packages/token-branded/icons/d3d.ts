import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedD3dIcon],svg[token-branded-d3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#46B5E0" d="m3.29 9.284l.506 5.335l2.75 4.712l1.707-2.11l-2.198-6.868z"></svg:path><svg:path fill="#0196DA" d="m20.689 9.284l-.502 5.335l-2.749 4.712l-1.729-2.127l2.22-6.85z"></svg:path><svg:path fill="#87C9EB" d="M15.633 17.291H8.44l-1.697 2.122L12.093 21l5.182-1.587z"></svg:path><svg:path fill="#E3F4FC" d="m6.038 10.14l-2.765-.998L6.96 5.105L11.924 3v3l-5.891 4.14z"></svg:path><svg:path fill="#82CEF0" d="m17.961 10.14l2.766-.998l-3.688-4.037L12.076 3v3l5.89 4.14z"></svg:path><svg:path fill="#B9E2FE" fill-rule="evenodd" d="m17.814 10.44l-5.803-4.167l-5.804 4.168l2.215 6.741H15.6l2.22-6.741zM7.582 13.72l4.429 3.25l4.429-3.25l-1.691-5.264H9.272z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class TokenBrandedD3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
