import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMountainFlagIcon],svg[material-symbols-light-mountain-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.64 12.825l.94-1.93q.212-.41.604-.653q.391-.242.85-.242H11.5V3h5.692l-.75 1.5l.75 1.5H12.5v4h1.39q.46 0 .845.242q.386.242.604.646l.97 1.981l-2.346 1.558L12 13.433l-1.964.994zM3.616 21l3.587-7.279l2.762 1.852L12 14.567l2.036 1.006l2.731-1.802L20.385 21z"></svg:path>`,
})
export class MaterialSymbolsLightMountainFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
