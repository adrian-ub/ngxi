import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsStruct16Icon],svg[nonicons-struct-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-.286A.286.286 0 0 0 1.714 2v4c0 .158.128.286.286.286h12A.286.286 0 0 0 14.286 6V2A.286.286 0 0 0 14 1.714zm-2 9.429a2 2 0 0 1 2-2h2.857a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-.286a.286.286 0 0 0-.286.286V14c0 .158.128.286.286.286h2.857A.286.286 0 0 0 5.143 14v-2.857a.286.286 0 0 0-.286-.286zm7.143.286a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2h-2.857a2 2 0 0 1-2-2zm2-.286a.286.286 0 0 0-.286.286V14c0 .158.128.286.286.286H14a.286.286 0 0 0 .286-.286v-2.857a.286.286 0 0 0-.286-.286z" clip-rule="evenodd"></svg:path>`,
})
export class NoniconsStruct16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
