import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignFilterTwotoneIcon],svg[ant-design-filter-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M420.6 798h182.9V642H420.6zM411 561.4l9.5 16.6h183l9.5-16.6L811.3 226H212.7z"></svg:path><svg:path fill="currentColor" d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48M603.5 798H420.6V642h182.9zm9.5-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6z"></svg:path>`,
})
export class AntDesignFilterTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
