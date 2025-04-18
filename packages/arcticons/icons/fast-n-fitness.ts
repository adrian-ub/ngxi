import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFastNFitnessIcon],svg[arcticons-fast-n-fitness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="17.973" r="2.904" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.317 41.778L24 31.108l4.683 10.67M24 31.108v-6.75m8.581-8.893L24 24.36l-8.581-8.894m-2.574-1.91h22.368M36.71 8.7v9.713M11.423 8.7v9.713M38.198 8.7v9.713m1.487-7.538v5.362M9.936 8.7v9.713M8.45 10.875v5.362"></svg:path>`,
})
export class ArcticonsFastNFitnessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
