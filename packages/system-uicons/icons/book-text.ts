import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsBookTextIcon],svg[system-uicons-book-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.5 6.59q-2-1.09-4-1.09c-2 0-2.667.364-4 1.09v9.91q2-1 4-1c2 0 2.667.333 4 1z"></svg:path><svg:path d="M16.556 7.788Q15.529 7.5 14.5 7.5c-1.029 0-1.37.096-2.056.288m4.112 2Q15.529 9.5 14.5 9.5c-1.029 0-1.37.096-2.056.288m4.112 2Q15.529 11.5 14.5 11.5c-1.029 0-1.37.096-2.056.288m4.112 2Q15.529 13.5 14.5 13.5c-1.029 0-1.37.096-2.056.288m-3.888-6Q7.529 7.5 6.5 7.5c-1.029 0-1.37.096-2.056.288m4.112 2Q7.529 9.5 6.5 9.5c-1.029 0-1.37.096-2.056.288m4.112 2Q7.529 11.5 6.5 11.5c-1.029 0-1.37.096-2.056.288m4.112 2Q7.529 13.5 6.5 13.5c-1.029 0-1.37.096-2.056.288"></svg:path><svg:path d="M10.5 6.59q-2-1.09-4-1.09c-2 0-2.667.364-4 1.09v9.91q2-1 4-1c2 0 2.667.333 4 1z"></svg:path></svg:g>`,
})
export class SystemUiconsBookTextIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
