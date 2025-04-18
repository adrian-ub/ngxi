import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsAngularFillIcon],svg[akar-icons-angular-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.174 12.594h3.652L12 8.095z"></svg:path><svg:path fill="currentColor" d="M12 1L2 4.652l1.525 13.541L12 23l8.475-4.807L22 4.652zm6.24 16.786h-2.33l-1.257-3.212H9.347L8.09 17.786H5.76L12 3.431z"></svg:path>`,
})
export class AkarIconsAngularFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
