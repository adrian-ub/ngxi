import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGraphqlIcon],svg[simple-icons-graphql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 0a2.138 2.138 0 1 0 0 4.277a2.138 2.138 0 1 0 0-4.277m8.54 4.931a2.138 2.138 0 1 0 0 4.277a2.138 2.138 0 1 0 0-4.277m0 9.862a2.138 2.138 0 1 0 0 4.277a2.138 2.138 0 1 0 0-4.277m-8.54 4.931a2.138 2.138 0 1 0 0 4.276a2.138 2.138 0 1 0 0-4.276m-8.542-4.93a2.138 2.138 0 1 0 0 4.276a2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277a2.138 2.138 0 1 0 0-4.277m8.542-3.378L2.953 6.777v10.448l9.049 5.224l9.047-5.224V6.777zm0 1.601l7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0l6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z"></svg:path>`
})
export class SimpleIconsGraphqlIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
