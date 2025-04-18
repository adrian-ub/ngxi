import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCalculatorIcon],svg[game-icons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M95 25v462h322V25zm193 18h80v18h-80zM114 83h284v84H114zm22 46v18h88v-18zm-22 54h58v58h-58zm76 0h58v58h-58zm74 0h58v58h-58zm76 0h58v58h-58zm-208 18v22h22v-22zm76 0v22h22v-22zm74 0v22h22v-22zm76 0v22h22v-22zm-244 56h58v58h-58zm76 0h58v58h-58zm74 0h58v58h-58zm76 0h58v58h-58zm-208 18v22h22v-22zm76 0v22h22v-22zm74 0v22h22v-22zm76 0v22h22v-22zm-244 56h58v58h-58zm76 0h58v58h-58zm74 0h58v58h-58zm76 0h58v132h-58zm-208 18v22h22v-22zm76 0v22h22v-22zm74 0v22h22v-22zm76 0v96h22v-96zm-244 56h58v58h-58zm76 0h58v58h-58zm74 0h58v58h-58zm-132 18v22h22v-22zm76 0v22h22v-22zm74 0v22h22v-22z"></svg:path>`,
})
export class GameIconsCalculatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
