import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVueConfigIcon],svg[material-icon-theme-vue-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="M15 2H6a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h16a2 2 0 0 0 2-2V11Zm3 22H6v-2h12Zm0-4H6v-2h12Zm0-4H6v-2h12Zm-4-4V4l8 8Z"></svg:path><svg:path fill="#41b883" d="m14 16l8 14.093l8-14.024V16h-3.11l-4.843 8.49L17.225 16Z"></svg:path><svg:path fill="#35495e" d="m17.225 16l4.821 8.492l4.844-8.491h-2.918l-1.906 3.342l-1.9-3.343Z"></svg:path>`,
})
export class MaterialIconThemeVueConfigIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
