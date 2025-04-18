import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTagsIcon],svg[hugeicons-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18.058 8.536l-1-.613C16.055 7.308 15.554 7 15 7s-1.055.308-2.058.923l-1 .613c-.949.582-1.423.873-1.682 1.342c-.26.47-.26 1.035-.26 2.166v5.865c0 1.929 0 2.893.586 3.492S12.114 22 14 22h2c1.886 0 2.828 0 3.414-.6c.586-.598.586-1.562.586-3.49v-5.866c0-1.131 0-1.697-.26-2.166s-.733-.76-1.682-1.342"></svg:path><svg:path d="M14 7.108c-.639-.613-1.02-.935-1.503-1.056c-.56-.141-1.148.017-2.325.333L9 6.699c-1.113.3-1.67.448-2.056.817c-.387.37-.537.894-.836 1.943l-1.554 5.438c-.51 1.788-.766 2.682-.332 3.387c.372.605 1.862 1.35 3.279 1.716"></svg:path><svg:path d="M14.495 10c.841-.56 1.588-1.457 2.052-2.573c.958-2.305.347-4.67-1.363-5.281c-1.711-.612-3.875.76-4.833 3.065A6 6 0 0 0 10 6.364"></svg:path></svg:g>`,
})
export class HugeiconsTagsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
