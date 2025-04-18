import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHairDryerIcon],svg[hugeicons-hair-dryer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.691 2.152C5.801 1.363 3 3.749 3 7s2.8 5.637 5.691 4.848c2.307-.629 5.513-2.268 7.933-2.046c.877.08 1.502.844 2.323 1.069c1.109.303 1.543-1.371 1.782-2.118a5.8 5.8 0 0 0 0-3.506c-.239-.747-.673-2.42-1.782-2.118c-.821.225-1.446.989-2.323 1.069c-2.42.222-5.626-1.417-7.933-2.046"></svg:path><svg:path d="M5.5 11.5c1.372 1.41 1.274 3.768 1.319 5.876c.018.876.684 1.624 1.528 1.624h1.22c.67 0 1.073-1.504 1.28-1.978c.274-.63.157-1.348-.171-1.95C9.982 13.803 9.5 13 10 11.5m6.5-7l.379 1.52a4 4 0 0 1 0 1.96L16.5 9.5M9 19c0 .932 0 1.398-.174 1.765c-.232.49-.677.88-1.237 1.083C7.169 22 6.065 22 5 22"></svg:path></svg:g>`,
})
export class HugeiconsHairDryerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
