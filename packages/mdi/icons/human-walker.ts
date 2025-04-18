import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHumanWalkerIcon],svg[mdi-human-walker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m7.8 15.7l-.6-6.4c-.1-.8-.7-1.3-1.5-1.3H16c-1.5 0-2.9-.5-3.8-1.4l-2-2c-.1-.2-.6-.6-1.4-.6c-.5 0-1 .2-1.4.6L4.1 9.9c-.5.7-.5 1.6-.2 2.1l1.4 2.8l-3.1 4L3.8 20l3.7-4.7l-.3-1.3l.8.8V20h2v-6.1l-2.1-2.1l2.4-2.4c.9.9 1.7 1.8 3.6 2.3L13 20h1.5l.4-3.5h3.2l.1 1.2c-.4.3-.7.7-.7 1.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.5-.3-1-.7-1.3M15.1 15l.4-3.5h2l.4 3.5z"></svg:path>`,
})
export class MdiHumanWalkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
