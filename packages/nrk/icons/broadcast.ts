import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkBroadcastIcon],svg[nrk-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.869 9.699L6.929 2h-2.37L.5 9.699L4.35 17h2.369zm4.733 0L10.08 5H7.71L5.234 9.699L7.501 14h2.37zm13.525 0L17.067 2h2.37l4.06 7.699L19.646 17h-2.37zm-4.733 0L13.916 5h2.37l2.477 4.699L16.495 14h-2.37zM13.107 22v-8H11v8z" clip-rule="evenodd"></svg:path>`,
})
export class NrkBroadcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
