import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignHarmonyOSOutlinedIcon],svg[ant-design-harmony-o-s-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M511.5 65C719.987 65 889 234.013 889 442.5S719.987 820 511.5 820S134 650.987 134 442.5S303.013 65 511.5 65m0 64C338.359 129 198 269.359 198 442.5S338.359 756 511.5 756S825 615.641 825 442.5S684.641 129 511.5 129M745 889v72H278v-72z"></svg:path>`,
})
export class AntDesignHarmonyOSOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
