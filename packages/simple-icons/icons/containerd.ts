import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsContainerdIcon],svg[simple-icons-containerd-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.629 0v24H20.37V0zM17.59 21.208H6.421V10.604h7.812V6.692h3.346v14.516zm-7.823-7.812h4.466v5.02H9.767z"></svg:path>`,
})
export class SimpleIconsContainerdIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
