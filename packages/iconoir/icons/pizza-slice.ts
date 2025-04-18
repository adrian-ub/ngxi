import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPizzaSliceIcon],svg[iconoir-pizza-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m14 9.01l.01-.011M8 8.01l.01-.011M8 14.01l.01-.011"></svg:path><svg:path d="M6 19L2.236 3.004a.6.6 0 0 1 .754-.713L19 7"></svg:path><svg:path stroke-linecap="round" d="M22.198 8.425a1.75 1.75 0 0 0-3.396-.85c-.391 1.568-1.9 4.05-4.227 6.375c-2.3 2.301-5.148 4.194-7.968 4.845a1.75 1.75 0 1 0 .787 3.41c3.68-.849 7.082-3.206 9.656-5.78c2.549-2.549 4.54-5.568 5.148-8Z"></svg:path></svg:g>`,
})
export class IconoirPizzaSliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
