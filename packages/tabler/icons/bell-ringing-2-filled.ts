import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBellRinging2FilledIcon],svg[tabler-bell-ringing-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.63 17.531c.612.611.211 1.658-.652 1.706a4 4 0 0 1-3.05-1.166a4 4 0 0 1-1.165-3.049c.046-.826 1.005-1.228 1.624-.726l.082.074zM20.071 3.929c.96.96 1.134 2.41.52 3.547l-.09.153l-.024.036a8.01 8.01 0 0 1-1.446 7.137l-.183.223l-.191.218l-2.073 2.072l-.08.112a3 3 0 0 0-.499 2.113l.035.201l.045.185c.264.952-.853 1.645-1.585 1.051l-.086-.078L3.101 9.586c-.727-.727-.017-1.945.973-1.671a3 3 0 0 0 2.5-.418l.116-.086l2.101-2.1a8 8 0 0 1 7.265-1.86l.278.071l.037-.023a3 3 0 0 1 3.432.192l.14.117z"></svg:path>`,
})
export class TablerBellRinging2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
