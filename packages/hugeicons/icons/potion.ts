import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPotionIcon],svg[hugeicons-potion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 15a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path><svg:path d="M13 15a2.5 2.5 0 0 1-5 0m4.46-10.016q.025-.237.01-.476l-.122-1.978c-.022-.34.309-.601.65-.513l4.613 1.194a.495.495 0 0 1 .298.759l-1.13 1.653q-.136.2-.238.417m-4.08-1.056a3 3 0 0 1-.09.48L11.517 8m.943-3.016L11 4.606m1.46.378l4.08 1.056m0 0q-.104.223-.17.46L15.66 9m.882-2.96L18 6.418M5 15h14m-4.992-3h-.009"></svg:path></svg:g>`,
})
export class HugeiconsPotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
