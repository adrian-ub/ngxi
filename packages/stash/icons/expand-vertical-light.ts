import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashExpandVerticalLightIcon],svg[stash-expand-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.146 8.354a.5.5 0 0 0 .708-.708l-1.946-1.945c-.09-.09-.176-.176-.256-.244a1 1 0 0 0-.343-.2a1 1 0 0 0-.618 0a1 1 0 0 0-.343.2c-.08.068-.167.155-.256.244L9.146 7.646a.5.5 0 1 0 .708.708l1.934-1.935c.105-.105.162-.162.207-.2L12 6.215l.005.004c.045.038.102.095.207.2zm-4.292 7.292a.5.5 0 0 0-.708.708l1.946 1.945c.09.09.176.176.256.244c.087.074.198.154.343.201a1 1 0 0 0 .618 0a1 1 0 0 0 .343-.201c.08-.068.167-.155.256-.244l1.946-1.945a.5.5 0 0 0-.708-.708l-1.934 1.935a4 4 0 0 1-.207.2l-.005.004l-.005-.005a4 4 0 0 1-.207-.2z"></svg:path>`,
})
export class StashExpandVerticalLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
