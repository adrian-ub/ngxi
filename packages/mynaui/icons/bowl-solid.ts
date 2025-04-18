import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBowlSolidIcon],svg[mynaui-bowl-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.956 10.25c-.94 0-1.813.778-1.696 1.83a9.7 9.7 0 0 0 2.812 5.816a9.8 9.8 0 0 0 1.984 1.524c.126.073.177.184.176.268v.306a1.753 1.753 0 0 0 1.755 1.756h6.03c.965 0 1.755-.78 1.755-1.75v-.449l.002-.017l.003-.007a.1.1 0 0 1 .047-.038a9.8 9.8 0 0 0 2.104-1.593a9.7 9.7 0 0 0 2.812-5.815c.117-1.053-.756-1.831-1.696-1.831zM6 4.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 6 4.25m12 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m-6-2a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiBowlSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
