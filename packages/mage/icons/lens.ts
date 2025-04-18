import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLensIcon],svg[mage-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M16.113 14.375v-4.75L12 7.25L7.886 9.625v4.75L12 16.75zm1.255-10.213L12.01 7.25m9.462 5.425l-5.359-3.05m0 10.935v-6.185m-9.49 5.453l5.368-3.078m-9.462-5.443l5.358 3.068M7.886 3.44v6.185"></svg:path></svg:g>`,
})
export class MageLensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
