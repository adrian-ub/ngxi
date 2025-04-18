import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMessageCogOutlineIcon],svg[mdi-message-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-3.2-4.7l-1.1-.8v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.5-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.1 0-.2.1-.2.2l-.2 1.3c-.3.2-.6.3-.9.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.1.2-.1.3l1 1.7c.1.1.2.2.3.1l1.2-.3c.3.2.5.4.8.5l.2 1.3c0 .1.1.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.1.6-.3.8-.5l1.2.5c.1 0 .2 0 .3-.1l1-1.7c.2-.2.2-.3.1-.4m-4.8.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"></svg:path>`,
})
export class MdiMessageCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
