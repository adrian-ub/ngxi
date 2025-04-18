import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalAdonisjsIcon],svg[devicon-original-adonisjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5A45FF" fill-rule="evenodd" d="M0 64c0 51.617 12.383 64 64 64c51.617 0 64-12.383 64-64c0-51.617-12.383-64-64-64C12.383 0 0 12.383 0 64zm25.808 13.295l20.075-45.621C49.27 23.984 55.788 19.813 64 19.813c8.212 0 14.729 4.17 18.118 11.86l20.074 45.622c.912 2.216 1.694 5.084 1.694 7.56c0 11.34-7.951 19.291-19.292 19.291c-3.862 0-6.93-.985-10.035-1.983c-3.182-1.022-6.403-2.057-10.559-2.057c-4.108 0-7.408 1.044-10.653 2.071c-3.138.993-6.225 1.969-9.941 1.969c-11.34 0-19.292-7.95-19.292-19.29c0-2.477.783-5.345 1.695-7.561zM64 39.625l-19.813 44.84c5.866-2.738 12.644-4.041 19.813-4.041c6.909 0 13.947 1.303 19.552 4.04L64 39.626z" clip-rule="evenodd"></svg:path>`,
})
export class DeviconOriginalAdonisjsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
