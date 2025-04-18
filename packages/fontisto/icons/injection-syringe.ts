import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoInjectionSyringeIcon],svg[fontisto-injection-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.624 2.758L7.125 4.257L5.384 2.515l1.448-1.448L5.765-.001L0 5.764l1.067 1.067l1.448-1.448l1.742 1.742l-1.499 1.499l12.96 12.96l5.399.124l2.289 2.289l1.054-.114l-2.758-2.758l-.124-5.399zm0 1.708l6.584 6.584l-4.148 4.148l-1.676-1.674l2.08-2.08l-.88-.88l-2.08 2.08l-1.55-1.55l2.08-2.08l-.88-.88l-2.08 2.08L4.48 8.62z"></svg:path>`,
})
export class FontistoInjectionSyringeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
