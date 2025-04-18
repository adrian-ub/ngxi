import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneCityscapeAtDuskIcon],svg[emojione-cityscape-at-dusk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbbf67" d="M0 0h64v64H0z"></svg:path><svg:path fill="#f15744" d="M0 0h64v64H0z" opacity=".7"></svg:path><svg:path fill="#62727a" d="M48 45.7h16V64H44V49.7c0-2.2 1.8-4 4-4"></svg:path><svg:path fill="#d0d0d0" d="M60.8 49h.4c.4 0 .8.4.8 1v14h-2V50c0-.6.4-1 .8-1m-5 0h.4c.4 0 .8.4.8 1v14h-2V50c0-.6.4-1 .8-1"></svg:path><svg:g fill="#62727a"><svg:path d="M51.3 43h11v2.9h-11zM0 43.1h13.1v-5.2L0 40.9z"></svg:path><svg:path d="M0 43h13v21H0z"></svg:path></svg:g><svg:path fill="#ed4c5c" d="M9.5 51c0 .5-.4 1-1 1h-3c-.6 0-1-.5-1-1v-2c0-.6.4-1 1-1h3c.6 0 1 .4 1 1zm0 8c0 .5-.4 1-1 1h-3c-.6 0-1-.5-1-1v-2c0-.6.4-1 1-1h3c.6 0 1 .4 1 1z"></svg:path><svg:path fill="#3e4347" d="M50 38v-4l-6-2V21h-2v11l-6 2v4h-3v-7.7L23 19L13 30.3V64h40V38z"></svg:path><svg:path fill="#6adbc6" d="M41.5 45c0 .5-.5 1-1 1h-3c-.5 0-1-.5-1-1v-2c0-.6.5-1 1-1h3c.5 0 1 .4 1 1zm8 8c0 .5-.5 1-1 1h-3c-.5 0-1-.5-1-1v-2c0-.6.5-1 1-1h3c.5 0 1 .4 1 1zm-8 8c0 .5-.5 1-1 1h-3c-.5 0-1-.5-1-1v-2c0-.6.5-1 1-1h3c.5 0 1 .4 1 1zm8 0c0 .5-.5 1-1 1h-3c-.5 0-1-.5-1-1v-2c0-.6.5-1 1-1h3c.5 0 1 .4 1 1z"></svg:path><svg:path fill="#ffdd7d" d="M30 43c0 .5-.5 1-1 1H17c-.5 0-1-.5-1-1v-2c0-.6.5-1 1-1h12c.5 0 1 .4 1 1zm0 16c0 .5-.5 1-1 1H17c-.5 0-1-.5-1-1v-2c0-.6.5-1 1-1h12c.5 0 1 .4 1 1zm0-24c0 .5-.5 1-1 1H17c-.5 0-1-.5-1-1v-2c0-.6.5-1 1-1h12c.5 0 1 .4 1 1zm0 16c0 .5-.5 1-1 1H17c-.5 0-1-.5-1-1v-2c0-.6.5-1 1-1h12c.5 0 1 .4 1 1z"></svg:path>`,
})
export class EmojioneCityscapeAtDuskIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
