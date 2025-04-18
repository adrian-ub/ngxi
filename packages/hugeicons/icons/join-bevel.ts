import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsJoinBevelIcon],svg[hugeicons-join-bevel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.999 13h3c1.886 0 2.828 0 3.414.586S22 15.114 22 17v1c0 1.886 0 2.828-.586 3.414S19.885 22 18 22h-7.343c-.818 0-1.226 0-1.594-.152c-.367-.152-.656-.441-1.235-1.02l-4.656-4.656c-.578-.578-.867-.867-1.02-1.235C2 14.569 2 14.16 2 13.343V6c0-1.886 0-2.828.586-3.414S4.113 2 5.999 2h1c1.886 0 2.828 0 3.414.586S11 4.114 11 6v3c0 1.886 0 2.828.586 3.414S13.114 13 15 13" color="currentColor"></svg:path>`,
})
export class HugeiconsJoinBevelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
