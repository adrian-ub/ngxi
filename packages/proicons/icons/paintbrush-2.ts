import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPaintbrush2Icon],svg[proicons-paintbrush-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M9.781 10.832A4.79 4.79 0 0 0 3.75 15.46v3.79a1 1 0 0 0 1 1h3.79a4.79 4.79 0 0 0 4.628-6.03m-3.387-3.388a4.8 4.8 0 0 1 3.387 3.387m-3.387-3.387l3.19-3.19m.197 6.577l3.19-3.19m-3.387-3.387l3.19-3.19a2.395 2.395 0 0 1 3.387 3.387l-3.19 3.19m-3.387-3.387l3.387 3.387"></svg:path>`,
})
export class ProiconsPaintbrush2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
