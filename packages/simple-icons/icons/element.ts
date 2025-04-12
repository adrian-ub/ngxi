import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsElementIcon],svg[simple-icons-element-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m-1.314 4.715c3.289 0 5.956 2.66 5.956 5.943a.879.879 0 0 1-1.758 0a4.194 4.194 0 0 0-4.198-4.189a.878.878 0 1 1 0-1.754m-5.092 9.504a.88.88 0 0 1-.879-.877a5.95 5.95 0 0 1 5.956-5.945a.878.878 0 1 1 0 1.753a4.195 4.195 0 0 0-4.198 4.191a.88.88 0 0 1-.879.878m7.735 5.067c-3.29 0-5.957-2.662-5.957-5.944a.88.88 0 0 1 1.758 0a4.194 4.194 0 0 0 4.199 4.189a.879.879 0 1 1 0 1.755m0-2.683a.88.88 0 0 1-.88-.876a.88.88 0 0 1 .88-.878a4.195 4.195 0 0 0 4.199-4.19a.878.878 0 0 1 1.758 0c0 3.282-2.667 5.944-5.957 5.944"></svg:path>`
})
export class SimpleIconsElementIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
