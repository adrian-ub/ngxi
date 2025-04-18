import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashShareIcon],svg[stash-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.25 6a2.75 2.75 0 1 0-5.33.956L8.606 10.23a2.75 2.75 0 1 0-.01 3.55l6.208 3.679a2.75 2.75 0 1 0 .687-1.336l-6.27-3.716a2.8 2.8 0 0 0 .001-.806l6.6-3.423A2.75 2.75 0 0 0 20.25 6M17.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-11 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m11 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5" clip-rule="evenodd"></svg:path>`,
})
export class StashShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
