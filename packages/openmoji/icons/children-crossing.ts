import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiChildrenCrossingIcon],svg[openmoji-children-crossing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M59.474 32.473a5.07 5.07 0 0 1 0 7.164L39.427 59.683a5.07 5.07 0 0 1-7.163 0L12.217 39.637a5.07 5.07 0 0 1 0-7.164l20.047-20.047a5.07 5.07 0 0 1 7.163 0z"></svg:path><svg:path d="M59.035 32.456a4.943 4.943 0 0 1 0 6.983L39.492 58.983a4.944 4.944 0 0 1-6.984 0L12.965 39.439a4.943 4.943 0 0 1 0-6.983l19.543-19.543a4.944 4.944 0 0 1 6.984 0zm1.474-1.474L40.965 11.44a7.02 7.02 0 0 0-9.93 0L11.49 30.982a7.02 7.02 0 0 0 0 9.931l19.544 19.544a7.02 7.02 0 0 0 9.93 0L60.51 40.913a7.02 7.02 0 0 0 0-9.93"></svg:path><svg:circle cx="29.821" cy="25.573" r="2.31" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m25.82 46.332l3.482-7.008c-1.114-2.506-.906-7.914 0-8.8c.231-.3 1.58-1.468 1.883 2.096l.854 5.367m.877 8.434l-.952-5.095m-3.442-8.082l-3.058 2.893"></svg:path><svg:circle cx="42.179" cy="25.573" r="2.31" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m38.178 46.332l3.483-7.008c-1.115-2.506-.906-7.914 0-8.8c.231-.3 1.58-1.468 1.883 2.096l.854 5.367m.877 8.434l-.952-5.095m-3.442-8.082l-3.058 2.893"></svg:path>`,
})
export class OpenmojiChildrenCrossingIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
