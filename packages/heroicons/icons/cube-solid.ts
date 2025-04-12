import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsCubeSolidIcon],svg[heroicons-cube-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25l9-5.25zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648zm-10.5 14.25v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648z"></svg:path>`
})
export class HeroiconsCubeSolidIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
