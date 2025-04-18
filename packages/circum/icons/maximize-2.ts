import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMaximize2Icon],svg[circum-maximize-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.513 3.066H4.93a2.06 2.06 0 0 0-1.15.22a1.6 1.6 0 0 0-.717 1.437v5.793a.5.5 0 0 0 1 0V5.107a2.5 2.5 0 0 1 .022-.689c.115-.373.469-.352.777-.352h5.651a.5.5 0 0 0 0-1m-7.45 10.422v5.583a2.06 2.06 0 0 0 .221 1.15a1.6 1.6 0 0 0 1.436.717h5.793a.5.5 0 0 0 0-1H5.1a2.5 2.5 0 0 1-.689-.022c-.372-.115-.352-.469-.352-.777v-5.651a.5.5 0 0 0-1 0Zm10.424 7.446h5.583a2.06 2.06 0 0 0 1.15-.22a1.6 1.6 0 0 0 .717-1.437v-5.793a.5.5 0 0 0-1 0v5.409a2.5 2.5 0 0 1-.022.689c-.115.373-.469.352-.777.352h-5.651a.5.5 0 0 0 0 1m7.45-10.422V4.929a2.06 2.06 0 0 0-.221-1.15a1.6 1.6 0 0 0-1.436-.717h-5.793a.5.5 0 0 0 0 1H18.9a2.5 2.5 0 0 1 .689.022c.372.115.352.469.352.777v5.651a.5.5 0 0 0 1 0Z"></svg:path>`,
})
export class CircumMaximize2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
