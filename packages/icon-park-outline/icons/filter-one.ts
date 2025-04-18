import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFilterOneIcon],svg[icon-park-outline-filter-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M24.489 8.398c-.243-.04-.215-.398.031-.398H39.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031l-1.966-12.317a1 1 0 0 0-.83-.83zm-18 18c-.243-.04-.215-.398.032-.398H21.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031l-1.966-12.317a1 1 0 0 0-.83-.83zm9-9c-.243-.04-.215-.398.031-.398H30.5a.5.5 0 0 1 .5.5v14.98c0 .246-.359.274-.398.031L28.75 20.91a2 2 0 0 0-1.66-1.66z"></svg:path>`,
})
export class IconParkOutlineFilterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
