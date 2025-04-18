import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundRollerSkatingIcon],svg[ic-round-roller-skating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16c1.1 0 2-.9 2-2v-.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-.67c-.87-.22-1.57-.81-1.95-1.57H9.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.52L12 5H9.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H12V3c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2zM5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m14 0c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m-7 0c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"></svg:path>`,
})
export class IcRoundRollerSkatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
