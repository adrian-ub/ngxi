import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiListIcon],svg[oi-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 0C.22 0 0 .22 0 .5s.22.5.5.5s.5-.22.5-.5S.78 0 .5 0M2 0v1h6V0zM.5 2c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5S.78 2 .5 2M2 2v1h6V2zM.5 4c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5S.78 4 .5 4M2 4v1h6V4zM.5 6c-.28 0-.5.22-.5.5s.22.5.5.5s.5-.22.5-.5S.78 6 .5 6M2 6v1h6V6z"></svg:path>`,
})
export class OiListIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
