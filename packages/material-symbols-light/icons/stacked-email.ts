import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStackedEmailIcon],svg[material-symbols-light-stacked-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 19.77q-.691 0-1.153-.463T2 18.154v-9.5h1v9.5q0 .269.173.442t.443.173h14.769v1zm3-3q-.691 0-1.153-.463T5 15.154v-9.77q0-.69.463-1.152t1.153-.463h13.769q.69 0 1.153.463T22 5.385v9.769q0 .69-.462 1.153t-1.153.462zm6.884-5.24L21 5.945q0-.292-.048-.558t-.144-.501L13.5 10.311L6.154 4.923q-.096.235-.125.492Q6 5.67 6 5.945z"></svg:path>`,
})
export class MaterialSymbolsLightStackedEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
