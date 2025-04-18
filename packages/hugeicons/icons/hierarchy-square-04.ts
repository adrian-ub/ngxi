import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHierarchySquare04Icon],svg[hugeicons-hierarchy-square-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12c0-1.414 0-2.121-.513-2.56C7.975 9 7.15 9 5.5 9s-2.475 0-2.987.44C2 9.878 2 10.585 2 12s0 2.121.513 2.56C3.025 15 3.85 15 5.5 15s2.475 0 2.987-.44C9 14.122 9 13.415 9 12m13-7c0-1.414 0-2.121-.41-2.56S20.52 2 19.2 2h-1.4c-1.32 0-1.98 0-2.39.44C15 2.878 15 3.585 15 5s0 2.121.41 2.56S16.48 8 17.8 8h1.4c1.32 0 1.98 0 2.39-.44C22 7.122 22 6.415 22 5m0 14c0-1.414 0-2.121-.41-2.56S20.52 16 19.2 16h-1.4c-1.32 0-1.98 0-2.39.44C15 16.878 15 17.585 15 19s0 2.121.41 2.56s1.07.44 2.39.44h1.4c1.32 0 1.98 0 2.39-.44c.41-.439.41-1.146.41-2.56m-10-7.001v4.047c0 1.874.917 2.716 3 2.954m-3-7.001V7.952c0-1.767.779-2.694 3-2.952m-3 6.999H9" color="currentColor"></svg:path>`,
})
export class HugeiconsHierarchySquare04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
