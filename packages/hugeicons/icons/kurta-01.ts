import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKurta01Icon],svg[hugeicons-kurta-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.549 15a99 99 0 0 1 .021 4.09c-.016 1.362-.024 2.044-.464 2.477c-.439.433-1.13.433-2.512.433H9.406c-1.382 0-2.073 0-2.512-.433s-.448-1.115-.464-2.478A99 99 0 0 1 6.451 15m11.098 0c-.104-3.21-.393-6.638-1.039-9m1.039 9h1.867c.765 0 1.147 0 1.384-.251c.238-.252.216-.617.172-1.349c-.239-4.027-1.338-7.241-2.245-9.118c-.266-.552-.4-.828-.727-1.104c-.328-.275-.685-.377-1.4-.58L14.506 2C14.004 3 13.002 3.5 12 3.5S9.996 3 9.494 2L7.4 2.597c-.715.204-1.072.306-1.4.581c-.327.276-.46.552-.727 1.104c-.907 1.877-2.006 5.091-2.245 9.119c-.044.73-.066 1.096.172 1.348c.237.251.62.251 1.384.251H6.45m0 0c.104-3.21.393-6.638 1.039-9M17.5 12h3m-17 0h3M12 4v5" color="currentColor"></svg:path>`,
})
export class HugeiconsKurta01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
