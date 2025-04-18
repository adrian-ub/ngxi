import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilFastForwardSolidIcon],svg[basil-fast-forward-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.764 11.284a1.3 1.3 0 0 0-.31-.339A25.5 25.5 0 0 0 5.38 7.082l-.466-.165c-.87-.31-1.79.279-1.907 1.177a30.3 30.3 0 0 0 0 7.812c.118.898 1.037 1.486 1.907 1.178l.466-.166a25.5 25.5 0 0 0 7.073-3.863q.19-.148.31-.339a30 30 0 0 0 .244 3.19c.118.898 1.037 1.486 1.907 1.178l.466-.166a25.5 25.5 0 0 0 7.073-3.863c.69-.534.69-1.576 0-2.11a25.5 25.5 0 0 0-7.073-3.863l-.466-.165c-.87-.31-1.79.279-1.907 1.177a30 30 0 0 0-.244 3.19"></svg:path>`,
})
export class BasilFastForwardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
