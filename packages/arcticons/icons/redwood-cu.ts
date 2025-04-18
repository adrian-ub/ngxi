import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRedwoodCuIcon],svg[arcticons-redwood-cu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m27.62 17.316l3.616 12.641L27.033 43.5h-7.397"></svg:path><svg:path d="M27.033 43.5h8.253l-4.05-13.543M12.714 43.5l11.525-39l3.397 13.047l-8 25.953z"></svg:path></svg:g>`,
})
export class ArcticonsRedwoodCuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
