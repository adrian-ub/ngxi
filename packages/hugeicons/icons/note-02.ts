import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNote02Icon],svg[hugeicons-note-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m11 22l-1.478-2.354c-1.03-1.64-1.545-2.46-2.361-2.607c-1.33-.24-2.703.665-3.661 1.47"></svg:path><svg:path d="M3.5 9v7.028c0 1.203 0 1.804.299 2.287c.298.484.836.753 1.912 1.29l3.944 1.973c.841.42.85.422 1.79.422H14.5c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V9c0-2.828 0-4.243-.879-5.121C18.743 3 17.328 3 14.5 3h-5c-2.828 0-4.243 0-5.121.879C3.5 4.757 3.5 6.172 3.5 9M12 9H8m8 5H8m9-12v2m-5-2v2M7 2v2"></svg:path></svg:g>`,
})
export class HugeiconsNote02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
