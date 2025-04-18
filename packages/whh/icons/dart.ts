import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDartIcon],svg[whh-dart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m849.236 757l-75-75l33-34q21 6 55 15t53.5 14.5t40 14.5t31.5 19q42 43 36 104zm-144-6l46-46q37 41 84 99.5t76 96.5l28 38q-140-101-234-188m-470-310q-43-43-43-103.5t42.5-103t103-42.5t103.5 42.5t295 373.5l-128 128q-330-252-373-295M.236 0q14 9 37 24t79 58t95 82l-47 47q-41-41-81.5-93.5t-62-85T.236 0m757 849l58 174q-61 6-104-36q-10-11-19-31.5t-14.5-40t-14.5-53.5t-15-55l34-33z"></svg:path>`,
})
export class WhhDartIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
