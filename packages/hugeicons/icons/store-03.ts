import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStore03Icon],svg[hugeicons-store-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 10.987v4.506c0 2.831 0 4.247.879 5.127c.878.88 2.293.88 5.121.88h6c2.828 0 4.243 0 5.121-.88S21 18.324 21 15.492v-4.505"></svg:path><svg:path d="M15 16.977c-.684.607-1.773 1-3 1s-2.316-.393-3-1m8.796-14.474L6.15 2.532c-1.738-.09-2.184 1.25-2.184 1.906c0 .586-.075 1.44-1.14 3.045c-1.066 1.605-.986 2.082-.385 3.194c.498.922 1.766 1.282 2.428 1.343c2.1.048 3.122-1.768 3.122-3.045c1.042 3.207 4.005 3.207 5.325 2.84c1.322-.367 2.456-1.682 2.723-2.84c.156 1.44.63 2.279 2.027 2.856c1.449.597 2.694-.316 3.319-.902c.625-.585 1.026-1.885-.088-3.314c-.768-.985-1.089-1.913-1.194-2.875c-.06-.558-.114-1.157-.506-1.538c-.572-.557-1.394-.726-1.801-.7"></svg:path></svg:g>`,
})
export class HugeiconsStore03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
