import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoDiscourseIcon],svg[fontisto-discourse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.102 0h-.081C5.462 0 .13 5.252.001 11.779v.012L.007 24l12.097-.01c6.582-.055 11.897-5.404 11.897-11.995S18.686.056 12.109 0h-.005zM12 18.857h-.015a6.8 6.8 0 0 1-2.94-.666l.041.018l-4.345 1.077l1.227-4.018a6.8 6.8 0 0 1-.83-3.27A6.86 6.86 0 1 1 12 18.857"></svg:path>`,
})
export class FontistoDiscourseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
