import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignWindowsOutlinedIcon],svg[ant-design-windows-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120.1 770.6L443 823.2V543.8H120.1zm63.4-163.5h196.2v141.6l-196.2-31.9zm340.3 226.5l382 62.2v-352h-382zm63.4-226.5h255.3v214.4l-255.3-41.6zm-63.4-415.7v288.8h382V128.1zm318.7 225.5H587.3V245l255.3-42.3v214.2zm-722.4 63.3H443V201.9l-322.9 53.5zM183.5 309l196.2-32.5v140.4H183.5z"></svg:path>`,
})
export class AntDesignWindowsOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
