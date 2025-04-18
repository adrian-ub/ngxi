import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFrenchFries01Icon],svg[hugeicons-french-fries-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.566 10.023c-.278-2.2.424-2.277.772-2.005c5.864 3.466 9.012 3.292 10.354 3.686c1.073.316.785 1.244.436 1.605l-5.47 6.48c-.906 1.074-2.1 2.796-3.277 2.03c-.504-.329-.788-1.032-.883-1.576c-.553-2.493-1.654-8.02-1.932-10.22"></svg:path><svg:path d="m16.021 11.57l2.416-3.88c.272-.666-.332-1.727-2.416-1.09l-2.537 3.97m2.308-3.854V5.325c0-.36-.07-.73-.296-1.01c-.35-.436-.94-.7-2.237.461m-.17 5.545v-7.1c-.333-.548-1.2-1.54-1.999-1.123s-.72 1.123-.72 1.444v1.26m0 0v2.19m0-2.19c-.416-.451-1.622-1.26-2.343-.63c-.611.533-.349 2.82-.349 4.153m-.211 9.705a2.527 2.527 0 0 0 2.522-2.531a2.527 2.527 0 0 0-2.522-2.532c-.434 0-.841.11-1.197.303"></svg:path></svg:g>`,
})
export class HugeiconsFrenchFries01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
