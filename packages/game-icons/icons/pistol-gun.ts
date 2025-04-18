import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPistolGunIcon],svg[game-icons-pistol-gun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m79.238 115.768l-28.51 67.863h406.15l-.273-67.862h-263.83v55.605h-15v-55.605h-16.68v55.605H146.1v-55.605h-17.434v55.605h-15v-55.605H79.238zm387.834 15.96v40.66h18.688v-40.66zM56.768 198.63l20.566 32.015L28.894 406.5l101.68 7.174l21.54-97.996h115.74l14.664-80.252l174.55-3.873l-.13-32.922H56.767zm206.672 37.22l-11.17 61.142h-96.05l12.98-59.05l12.53-.278l-2.224 35.5l14.262 13.576l1.003-33.65l24.69-16.264l43.98-.976z"></svg:path>`,
})
export class GameIconsPistolGunIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
