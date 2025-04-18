import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconCouchdbIcon],svg[devicon-couchdb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e42528" d="M101.4 77.2c0 5-2.7 7.5-7.6 7.7H33.9c-4.9 0-7.6-2.5-7.6-7.7c0-5 2.7-7.5 7.6-7.7h60.2c4.9.2 7.3 2.7 7.3 7.7m-7.3 11.5H33.9c-4.9 0-7.6 2.4-7.6 7.7c0 5 2.7 7.4 7.6 7.7h60.2c4.9 0 7.6-2.5 7.6-7.7c-.3-5.3-2.7-7.7-7.6-7.7m18.6-42.1c-4.9 0-7.6 2.5-7.6 7.4v42.1c0 5 2.7 7.5 7.6 7.7c7.4-.2 11.3-7.7 11.3-22.9V62c0-10.2-3.9-15.2-11.3-15.4m-97.4 0C7.9 46.8 4 51.8 4 62v18.9c0 15.2 3.9 22.7 11.3 22.9c4.9 0 7.6-2.4 7.6-7.7V54.3c-.2-5-2.7-7.5-7.6-7.7m97.4-3.8c0-12.7-6.6-18.7-18.6-18.9H33.9c-12.2.2-18.6 6.5-18.6 18.9c7.4 0 11.3 4 11.3 11.5s3.9 11.4 11.3 11.4h52.5c7.3 0 11.3-3.9 11.3-11.4c-.3-7.7 3.9-11.2 11-11.5"></svg:path>`,
})
export class DeviconCouchdbIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
