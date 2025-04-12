import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDepositphotosIcon],svg[simple-icons-depositphotos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 24c5.119 0 9.061-3.942 9.061-9.06S17.119 5.88 12 5.88c-5.117 0-9.059 3.942-9.059 9.06S6.883 24 12 24m0-5.598c-1.954 0-3.461-1.508-3.461-3.462s1.507-3.462 3.461-3.462c1.955 0 3.462 1.507 3.462 3.462c0 1.954-1.507 3.462-3.462 3.462m2.634-12.241h6.161V0h-6.161z"></svg:path>`
})
export class SimpleIconsDepositphotosIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
