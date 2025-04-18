import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsStoneBridgeIcon],svg[game-icons-stone-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 265v71.11c7.526-4.42 17.73-10.278 30-16.98V265zm432 0v54.205a1117 1117 0 0 1 30 16.93V265zm-201.49.28c-39.653.03-99.394 23.28-148.06 46.976c-44.553 21.694-76.747 41.37-82.45 44.88V471h110.387c1.88-32.24 13.54-69.11 32.552-99.74c20.797-33.505 51.085-60.252 88.058-60.26c36.985-.008 67.298 26.736 88.12 60.244c19.038 30.635 30.72 67.51 32.603 99.756H487V357.145c-5.72-3.51-38.067-23.218-82.82-44.93c-48.875-23.713-108.863-46.962-148.67-46.934z"></svg:path>`,
})
export class GameIconsStoneBridgeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
