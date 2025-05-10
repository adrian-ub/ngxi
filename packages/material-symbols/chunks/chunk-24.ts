import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSocialLeaderboardIcon],svg[material-symbols-social-leaderboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.475 21Q5.2 21 3.6 19.4T2 15.525q0-2.15 1.438-3.713t3.587-1.737L3 2h7l2 4l2-4h7l-4 8.025q2.125.2 3.563 1.763T22 15.5q0 2.3-1.6 3.9T16.5 21q-.225 0-.462-.012t-.463-.063q1.375-.9 2.15-2.337T18.5 15.5q0-2.725-1.888-4.612T12 9t-4.612 1.888T5.5 15.5q0 1.7.7 3.2t2.2 2.225q-.225.05-.462.063T7.475 21M12 20q-1.875 0-3.187-1.312T7.5 15.5t1.313-3.187T12 11t3.188 1.313T16.5 15.5t-1.312 3.188T12 20m-1.85-1.75l1.85-1.4l1.85 1.4l-.7-2.275L15 14.65h-2.275L12 12.25l-.725 2.4H9l1.85 1.325z"></svg:path>`,
})
export class MaterialSymbolsSocialLeaderboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSocialLeaderboardOutlineIcon],svg[material-symbols-social-leaderboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q1.875 0 3.188-1.312T16.5 15.5t-1.312-3.187T12 11t-3.187 1.313T7.5 15.5t1.313 3.188T12 20M9.075 9.7q.5-.275 1.063-.437t1.137-.213L8.75 4h-2.5zm5.85 0l2.85-5.7H15.25l-2.125 4.25l.475.95q.35.1.675.213t.65.287M6.4 18.8q-.425-.725-.663-1.562T5.5 15.5t.238-1.737T6.4 12.2q-1.05.35-1.725 1.238T4 15.5t.675 2.063T6.4 18.8m11.2 0q1.05-.35 1.725-1.237T20 15.5t-.675-2.062T17.6 12.2q.425.725.663 1.563T18.5 15.5t-.238 1.738T17.6 18.8M12 22q-1 0-1.912-.288T8.4 20.926q-.225.05-.45.063T7.475 21Q5.2 21 3.6 19.4T2 15.525Q2 13.35 3.45 11.8t3.575-1.725L3 2h7l2 4l2-4h7l-4 8.025q2.125.2 3.563 1.75T22 15.5q0 2.3-1.6 3.9T16.5 21q-.225 0-.462-.012t-.463-.063q-.775.5-1.675.788T12 22M9.075 9.7L6.25 4zm5.85 0l2.85-5.7zm-4.775 8.55l.7-2.275L9 14.65h2.275l.725-2.4l.725 2.4H15l-1.85 1.325l.7 2.275l-1.85-1.4z"></svg:path>`,
})
export class MaterialSymbolsSocialLeaderboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSocialLeaderboardOutlineRoundedIcon],svg[material-symbols-social-leaderboard-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q1.875 0 3.188-1.312T16.5 15.5t-1.312-3.187T12 11t-3.187 1.313T7.5 15.5t1.313 3.188T12 20M9.075 9.7q.5-.275 1.063-.437t1.137-.213L8.75 4h-2.5zM6.4 18.8q-.425-.725-.663-1.562T5.5 15.5t.238-1.737T6.4 12.2q-1.05.35-1.725 1.238T4 15.5t.675 2.063T6.4 18.8m11.2 0q1.05-.35 1.725-1.237T20 15.5t-.675-2.062T17.6 12.2q.425.725.663 1.563T18.5 15.5t-.238 1.738T17.6 18.8M12 22q-1 0-1.912-.288T8.4 20.926q-.225.05-.45.063T7.475 21Q5.2 21 3.6 19.4T2 15.525Q2 13.35 3.45 11.8t3.575-1.725l-3.3-6.625q-.25-.5.038-.975T4.625 2h4.15q.575 0 1.038.3t.737.8L12 6l1.45-2.9q.275-.5.738-.8t1.037-.3h4.15q.575 0 .863.475t.037.975L17 10.025q2.125.2 3.563 1.75T22 15.5q0 2.3-1.6 3.9T16.5 21q-.225 0-.462-.012t-.463-.063q-.775.5-1.675.788T12 22M9.075 9.7L6.25 4zM12 16.85l-1.225.925q-.15.125-.3.013t-.1-.288l.475-1.525l-1.225-.875q-.15-.125-.1-.288t.25-.162h1.5l.475-1.625q.05-.175.25-.175t.25.175l.475 1.625h1.5q.2 0 .25.163t-.1.287l-1.225.875l.475 1.525q.05.175-.1.288t-.3-.013zm2.925-7.15l2.85-5.7H15.25l-2.125 4.25l.475.95q.35.1.675.213t.65.287"></svg:path>`,
})
export class MaterialSymbolsSocialLeaderboardOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSocialLeaderboardRoundedIcon],svg[material-symbols-social-leaderboard-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.475 21Q5.2 21 3.6 19.4T2 15.525q0-2.15 1.438-3.713t3.587-1.737l-3.3-6.625q-.25-.5.038-.975T4.625 2h4.15q.575 0 1.038.3t.737.8L12 6l1.45-2.9q.275-.5.738-.8t1.037-.3h4.15q.575 0 .863.475t.037.975L17 10.025q2.125.2 3.563 1.763T22 15.5q0 2.3-1.6 3.9T16.5 21q-.225 0-.462-.012t-.463-.063q1.375-.9 2.15-2.337T18.5 15.5q0-2.725-1.888-4.612T12 9t-4.612 1.888T5.5 15.5q0 1.7.7 3.2t2.2 2.225q-.225.05-.462.063T7.475 21M12 20q-1.875 0-3.187-1.312T7.5 15.5t1.313-3.187T12 11t3.188 1.313T16.5 15.5t-1.312 3.188T12 20m0-3.15l1.225.925q.15.125.3.013t.1-.288l-.475-1.525l1.225-.875q.15-.125.1-.288t-.25-.162h-1.5l-.475-1.625q-.05-.175-.25-.175t-.25.175l-.475 1.625h-1.5q-.2 0-.25.163t.1.287l1.225.875l-.475 1.525q-.05.175.1.288t.3-.013z"></svg:path>`,
})
export class MaterialSymbolsSocialLeaderboardRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSolarPowerIcon],svg[material-symbols-solar-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4V2h3v2zM2 22h9v-4H2.8zM6.125 9.325L4.7 7.925L6.825 5.8L8.25 7.2zM3.2 16H11v-4H4zM12 7Q9.925 7 8.463 5.537T7 2h10q0 2.075-1.463 3.538T12 7m-1 4V8h2v3zm2 11h9l-.8-4H13zm0-6h7.8l-.8-4h-7zm4.875-6.675l-2.1-2.125l1.4-1.4L19.3 7.9zM18 4V2h3v2z"></svg:path>`,
})
export class MaterialSymbolsSolarPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSolarPowerOutlineIcon],svg[material-symbols-solar-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 22l2-10h16l2 10zM3 4V2h3v2zm1.45 16H11v-2H4.85zM6.125 9.325L4.7 7.925L6.825 5.8L8.25 7.2zM5.25 16H11v-2H5.65zM12 7Q9.925 7 8.463 5.537T7 2h2q0 1.25.875 2.125T12 5t2.125-.875T15 2h2q0 2.075-1.463 3.538T12 7m-1 4V8h2v3zm2 9h6.55l-.4-2H13zm0-4h5.75l-.4-2H13zm4.875-6.675l-2.1-2.125l1.4-1.4L19.3 7.9zM18 4V2h3v2z"></svg:path>`,
})
export class MaterialSymbolsSolarPowerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSolarPowerOutlineRoundedIcon],svg[material-symbols-solar-power-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4q-.425 0-.712-.288T3 3t.288-.712T4 2h1q.425 0 .713.288T6 3t-.288.713T5 4zm.85 14l-.4 2H11v-2zm.575-10.8l.7-.7q.275-.275.688-.275t.712.275q.3.3.3.712t-.3.713l-.7.7q-.275.275-.687.275t-.713-.275q-.3-.3-.3-.712t.3-.713M5.25 16H11v-2H5.65zM12 7q-1.75 0-3.088-1.075t-1.762-2.7q-.1-.4.113-.75t.612-.45t.763.113t.462.612q.25.975 1.05 1.613T12 5t1.85-.638T14.9 2.75q.1-.4.463-.612t.762-.113t.613.45t.112.75q-.425 1.625-1.763 2.7T12 7m-1 3V9q0-.425.288-.712T12 8t.713.288T13 9v1q0 .425-.288.713T12 11t-.712-.288T11 10m2 10h6.55l-.4-2H13zm0-4h5.75l-.4-2H13zm4.175-7.4l-.7-.7q-.275-.275-.288-.688t.288-.712q.275-.275.7-.275t.7.275l.725.7q.3.275.3.688t-.3.712t-.712.3t-.713-.3M20 4h-1q-.425 0-.712-.288T18 3t.288-.712T19 2h1q.425 0 .713.288T21 3t-.288.713T20 4M2.475 19.6l1.2-6q.125-.7.688-1.15T5.65 12h12.7q.725 0 1.288.45t.687 1.15l1.2 6q.2.95-.412 1.675T19.55 22H4.45q-.95 0-1.563-.725T2.475 19.6"></svg:path>`,
})
export class MaterialSymbolsSolarPowerOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSolarPowerRoundedIcon],svg[material-symbols-solar-power-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4q-.425 0-.712-.288T3 3t.288-.712T4 2h1q.425 0 .713.288T6 3t-.288.713T5 4zM2.8 18l-.325 1.6q-.2.95.412 1.675T4.45 22H11v-4zM5.425 7.2l.7-.7q.275-.275.688-.275t.712.275q.3.3.3.712t-.3.713l-.7.7q-.275.275-.687.275t-.713-.275q-.3-.3-.3-.712t.3-.713M3.2 16H11v-4H5.65q-.725 0-1.287.45t-.688 1.15zm7.8-6V9q0-.425.288-.712T12 8t.713.288T13 9v1q0 .425-.288.713T12 11t-.712-.288T11 10m2 12h6.55q.95 0 1.563-.725t.412-1.675L21.2 18H13zm0-6h7.8l-.475-2.4q-.125-.7-.687-1.15T18.35 12H13zm4.175-7.4l-.7-.7q-.275-.275-.288-.688t.288-.712q.275-.275.7-.275t.7.275l.725.7q.3.275.3.688t-.3.712t-.712.3t-.713-.3M20 4h-1q-.425 0-.712-.288T18 3t.288-.712T19 2h1q.425 0 .713.288T21 3t-.288.713T20 4m-8 3q-1.75 0-3.088-1.062T7.15 3.225q-.125-.475.213-.85T8.2 2h7.6q.5 0 .825.375t.225.85q-.425 1.65-1.763 2.713T12 7"></svg:path>`,
})
export class MaterialSymbolsSolarPowerRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSortIcon],svg[material-symbols-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18v-2h6v2zm0-5v-2h12v2zm0-5V6h18v2z"></svg:path>`,
})
export class MaterialSymbolsSortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSortByAlphaIcon],svg[material-symbols-sort-by-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17L5.75 7H7.9l3.75 10H9.6l-.85-2.4H4.9L4.1 17zm3.5-4.1h2.6L6.9 9.15h-.15zm8.2 4.1v-1.9l5.05-6.3H13.9V7h7.05v1.9l-5 6.3H21V17zM9 5l3-3l3 3zm3 17l-3-3h6z"></svg:path>`,
})
export class MaterialSymbolsSortByAlphaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSortByAlphaOutlineRoundedIcon],svg[material-symbols-sort-by-alpha-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.9 14.6l-.575 1.75q-.1.275-.35.463t-.55.187q-.5 0-.812-.413t-.113-.912l3-8.025q.125-.3.375-.475T6.45 7h.75q.325 0 .575.175t.375.475l3.025 8.075q.175.475-.112.875t-.788.4q-.3 0-.55-.187t-.35-.463L8.75 14.6zm.6-1.7h2.6L6.9 9.15h-.15zm10.45 2.3h4.15q.375 0 .638.263T21 16.1t-.262.638T20.1 17h-5.8q-.25 0-.425-.175T13.7 16.4v-.95q0-.175.05-.337t.175-.288L18.75 8.8H14.8q-.375 0-.638-.262T13.9 7.9t.263-.638T14.8 7h5.55q.25 0 .425.175t.175.425v.95q0 .175-.05.337t-.175.288zM9.425 4.575L11.65 2.35q.15-.15.35-.15t.35.15l2.225 2.225q.125.125.063.275T14.4 5H9.6q-.175 0-.237-.15t.062-.275M11.65 21.65l-2.225-2.225q-.125-.125-.062-.275T9.6 19h4.8q.175 0 .238.15t-.063.275L12.35 21.65q-.15.15-.35.15t-.35-.15"></svg:path>`,
})
export class MaterialSymbolsSortByAlphaOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSortByAlphaRoundedIcon],svg[material-symbols-sort-by-alpha-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.9 14.6l-.575 1.75q-.1.275-.35.463t-.55.187q-.5 0-.812-.413t-.113-.912l3-8.025q.125-.3.375-.475T6.45 7h.75q.325 0 .575.175t.375.475l3.025 8.075q.175.475-.112.875t-.788.4q-.3 0-.55-.187t-.35-.463L8.75 14.6zm.6-1.7h2.6L6.9 9.15h-.15zm10.45 2.3h4.15q.375 0 .638.263T21 16.1t-.262.638T20.1 17h-5.8q-.25 0-.425-.175T13.7 16.4v-.95q0-.175.05-.337t.175-.288L18.75 8.8H14.8q-.375 0-.638-.262T13.9 7.9t.263-.638T14.8 7h5.55q.25 0 .425.175t.175.425v.95q0 .175-.05.337t-.175.288zM9.6 5q-.175 0-.237-.15t.062-.275L11.65 2.35q.15-.15.35-.15t.35.15l2.225 2.225q.125.125.063.275T14.4 5zm2.05 16.65l-2.225-2.225q-.125-.125-.062-.275T9.6 19h4.8q.175 0 .238.15t-.063.275L12.35 21.65q-.15.15-.35.15t-.35-.15"></svg:path>`,
})
export class MaterialSymbolsSortByAlphaRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSortRoundedIcon],svg[material-symbols-sort-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h4q.425 0 .713.288T9 17t-.288.713T8 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h10q.425 0 .713.288T15 12t-.288.713T14 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"></svg:path>`,
})
export class MaterialSymbolsSortRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSosIcon],svg[material-symbols-sos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17q-.825 0-1.412-.587T8.5 15V9q0-.825.588-1.412T10.5 7h3q.825 0 1.413.588T15.5 9v6q0 .825-.587 1.413T13.5 17zM1 17v-2h4v-2H3q-.825 0-1.412-.587T1 11V9q0-.825.588-1.412T3 7h4v2H3v2h2q.825 0 1.413.588T7 13v2q0 .825-.587 1.413T5 17zm16 0v-2h4v-2h-2q-.825 0-1.412-.587T17 11V9q0-.825.588-1.412T19 7h4v2h-4v2h2q.825 0 1.413.588T23 13v2q0 .825-.587 1.413T21 17zm-6.5-2h3V9h-3z"></svg:path>`,
})
export class MaterialSymbolsSosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSosRoundedIcon],svg[material-symbols-sos-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17q-.825 0-1.412-.587T8.5 15V9q0-.825.588-1.412T10.5 7h3q.825 0 1.413.588T15.5 9v6q0 .825-.587 1.413T13.5 17zM5 17H2q-.425 0-.712-.288T1 16t.288-.712T2 15h3v-2H3q-.825 0-1.412-.587T1 11V9q0-.825.588-1.412T3 7h3q.425 0 .713.288T7 8t-.288.713T6 9H3v2h2q.825 0 1.413.588T7 13v2q0 .825-.587 1.413T5 17m16 0h-3q-.425 0-.712-.288T17 16t.288-.712T18 15h3v-2h-2q-.825 0-1.412-.587T17 11V9q0-.825.588-1.412T19 7h3q.425 0 .713.288T23 8t-.288.713T22 9h-3v2h2q.825 0 1.413.588T23 13v2q0 .825-.587 1.413T21 17m-10.5-2h3V9h-3z"></svg:path>`,
})
export class MaterialSymbolsSosRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSosSharpIcon],svg[material-symbols-sos-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 17V7h7v10zM1 17v-2h4v-2H1V7h6v2H3v2h4v6zm16 0v-2h4v-2h-4V7h6v2h-4v2h4v6zm-6.5-2h3V9h-3z"></svg:path>`,
})
export class MaterialSymbolsSosSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionDogBarkingIcon],svg[material-symbols-sound-detection-dog-barking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.85 22v-6.775l4.925 4.925q1.35-1.35 2.413-2.912t1.062-3.463q0-1.4-.55-2.687t-1.525-2.263L8.35 6h3.5l4-4l2.05 2.05q1 1 1.55 2.263T20 9t-.55 2.688t-1.55 2.262L15.85 16v6zm4.925-4.675l-5.2-5.2q-.275-.275-.425-.65T4 10.7t.15-.763t.425-.637l2.1-2.125l3.1 3.075q.7.7 1.088 1.613t.387 1.912t-.375 1.913t-1.1 1.637"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionDogBarkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionDogBarkingOutlineIcon],svg[material-symbols-sound-detection-dog-barking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.85 22v-9.875h2V20h7v-4.825l2.625-2.625q.725-.725 1.125-1.625T18 9q0-1-.413-1.9t-1.112-1.625l-.625-.65L12.675 8h-4L7.6 9.075l-1.425-1.4L7.85 6h4l4-4l2.05 2.05q1 1 1.55 2.263T20 9t-.55 2.688t-1.55 2.262L15.85 16v6zm4.925-4.675l-5.2-5.2q-.275-.275-.425-.65T4 10.7t.15-.763t.425-.637l2.1-2.125l3.1 3.075q.7.7 1.088 1.613t.387 1.912t-.375 1.913t-1.1 1.637"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionDogBarkingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionGlassBreakIcon],svg[material-symbols-sound-detection-glass-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16V3h18v2.05l-7.5 8.425l-4-4zm0 5v-2l6.5-6.525l4 4L21 8.05V21z"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionGlassBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionGlassBreakOutlineIcon],svg[material-symbols-sound-detection-glass-break-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zM5 5v9l4.5-4.525l4 4L19 7.3V5zm0 14h14v-8.7l-5.5 6.175l-4-4L5 17z"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionGlassBreakOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionGlassBreakOutlineRoundedIcon],svg[material-symbols-sound-detection-glass-break-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm4.5-10.7q.375 0 .75.15t.675.45l2.575 2.575L19 7.3V5H5v9l3.075-3.1q.3-.3.663-.45t.762-.15m3.925 5.25q-.375 0-.75-.137T12 14.975l-2.5-2.5L5 17v2h14v-8.7l-4.1 4.6q-.3.35-.675.5t-.8.15"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionGlassBreakOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionGlassBreakRoundedIcon],svg[material-symbols-sound-detection-glass-break-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v.05l-7.5 8.425l-2.575-2.575q-.3-.3-.675-.45t-.75-.15q-.4 0-.763.15t-.662.45zm2 5q-.825 0-1.412-.587T3 19l6.5-6.525l2.5 2.5q.3.3.675.438t.75.137q.425 0 .8-.15t.675-.5L21 8.05V19q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionGlassBreakRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionGlassBreakSharpIcon],svg[material-symbols-sound-detection-glass-break-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18Zm2-7l4.5-4.525l4 4L19 7.3V5H5Zm0 5h14v-8.7l-5.5 6.175l-4-4L5 17Z"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionGlassBreakSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionLoudSoundIcon],svg[material-symbols-sound-detection-loud-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.725 17.625H12.05L9.225 20.45q-.575.575-1.412.575T6.4 20.45l-2.825-2.825Q3 17.05 3 16.2t.575-1.425l2.8-2.8V6.3zm-10.5-13.25q2.675-1.7 5.788-1.362T18.375 5.6t2.588 5.363T19.6 16.75l-1.45-1.45q1.125-2.05.788-4.337T16.95 7.025t-3.937-1.987t-4.338.787zm2.95 2.95Q11.6 6.9 13.05 7.15t2.5 1.3t1.288 2.488t-.188 2.862l-1.7-1.7q0-.625-.187-1.212t-.613-1.013q-.45-.45-1.037-.65t-1.238-.2z"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionLoudSoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionLoudSoundOutlineIcon],svg[material-symbols-sound-detection-loud-sound-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.725 17.625H12.05L9.225 20.45q-.575.575-1.412.575T6.4 20.45l-2.825-2.825Q3 17.05 3 16.2t.575-1.425l2.8-2.8V6.3zm-4.825-2L8.375 11.1v1.7l-3.4 3.4L7.8 19.025l3.4-3.4zM7.225 4.375q2.675-1.7 5.788-1.362T18.375 5.6t2.588 5.363T19.6 16.75l-1.45-1.45q1.125-2.05.788-4.337T16.95 7.025t-3.937-1.987t-4.338.787zm2.95 2.95Q11.6 6.9 13.05 7.15t2.5 1.3t1.288 2.488t-.188 2.862l-1.7-1.7q0-.625-.187-1.212t-.613-1.013q-.45-.45-1.037-.65t-1.238-.2zM8.95 15.05"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionLoudSoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionLoudSoundOutlineRoundedIcon],svg[material-symbols-sound-detection-loud-sound-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.05 17.625L9.225 20.45q-.575.575-1.412.575T6.4 20.45l-2.825-2.825Q3 17.05 3 16.2t.575-1.425l2.8-2.8V8.7q0-.675.613-.925T8.075 8l7.95 7.925q.475.475.213 1.088t-.938.612zm.85-2L8.375 11.1v1.7l-3.4 3.4L7.8 19.025l3.4-3.4zm4.05-8.6q-1.475-1.475-3.463-1.9T9.6 5.4q-.375.125-.762-.012t-.513-.513q-.15-.425.025-.812t.6-.538q2.425-.9 4.975-.363t4.45 2.438t2.438 4.488t-.388 5.037q-.15.4-.55.563t-.8-.013q-.375-.15-.513-.525t.013-.775q.7-1.9.275-3.887t-1.9-3.463m-1.4 1.425q.525.525.85 1.188t.45 1.387q.075.425-.213.75t-.712.325q-.4 0-.687-.275t-.388-.675q-.1-.35-.262-.675t-.438-.6t-.625-.462t-.725-.288q-.4-.1-.687-.375t-.338-.7t.325-.7t.85-.2q.725.125 1.4.45t1.2.85m-6.6 6.6"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionLoudSoundOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionLoudSoundOutlineSharpIcon],svg[material-symbols-sound-detection-loud-sound-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.825 21.85L2.15 16.2l4.225-4.225V6.3l11.35 11.325H12.05zm5.075-6.225L8.375 11.1v1.7l-3.4 3.4L7.8 19.025l3.4-3.4zm6.7 1.125l-1.45-1.45q1.125-2.05.788-4.337T16.95 7.025t-3.937-1.987t-4.338.787l-1.45-1.45q2.675-1.7 5.788-1.362T18.375 5.6t2.588 5.363T19.6 16.75m-2.95-2.95l-1.7-1.7q0-.625-.187-1.212t-.613-1.013q-.45-.45-1.037-.65t-1.238-.2l-1.7-1.7Q11.6 6.9 13.05 7.15t2.5 1.3t1.288 2.488t-.188 2.862m-7.7 1.25"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionLoudSoundOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionLoudSoundRoundedIcon],svg[material-symbols-sound-detection-loud-sound-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.05 17.625L9.225 20.45q-.575.575-1.412.575T6.4 20.45l-2.825-2.825Q3 17.05 3 16.2t.575-1.425l2.8-2.8V8.7q0-.675.613-.925T8.075 8l7.95 7.925q.475.475.213 1.088t-.938.612zm4.9-10.6q-1.475-1.475-3.462-1.9T9.6 5.4q-.375.125-.762-.012t-.513-.513q-.15-.425.025-.812t.6-.538q2.425-.9 4.975-.363t4.45 2.438t2.438 4.488t-.388 5.037q-.15.4-.55.563t-.8-.013q-.375-.15-.513-.525t.013-.775q.7-1.9.275-3.887t-1.9-3.463m-1.4 1.425q.55.55.862 1.238t.438 1.462q.05.4-.225.675t-.7.275q-.4 0-.687-.275t-.388-.675q-.1-.35-.262-.675t-.438-.6t-.625-.462t-.725-.288q-.4-.1-.687-.375t-.338-.7q-.05-.4.213-.7t.637-.25q.825.1 1.588.438t1.337.912"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionLoudSoundRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundDetectionLoudSoundSharpIcon],svg[material-symbols-sound-detection-loud-sound-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.825 21.85L2.15 16.2l4.225-4.225V6.3l11.35 11.325H12.05zm11.775-5.1l-1.45-1.45q1.125-2.05.788-4.337T16.95 7.025t-3.937-1.987t-4.338.787l-1.45-1.45q2.675-1.7 5.788-1.362T18.375 5.6t2.588 5.363T19.6 16.75m-2.95-2.95l-1.7-1.7q0-.625-.187-1.212t-.613-1.013q-.45-.45-1.037-.65t-1.238-.2l-1.7-1.7Q11.6 6.9 13.05 7.15t2.5 1.3t1.288 2.488t-.188 2.862"></svg:path>`,
})
export class MaterialSymbolsSoundDetectionLoudSoundSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundSamplerIcon],svg[material-symbols-sound-sampler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.225 18.325q-1.05-1.3-1.637-2.912T2 12q0-3.925 2.588-6.75T11 2.05v2q-3 .35-5 2.6T4 12q0 1.4.425 2.638T5.65 16.9zM12 22q-1.825 0-3.45-.6t-2.925-1.675l1.4-1.425q1.025.8 2.288 1.25T12 20t2.688-.45t2.287-1.25l1.4 1.425q-1.3 1.075-2.925 1.675T12 22m7.775-3.675L18.35 16.9q.8-1.025 1.225-2.262T20 12q0-3.1-2-5.35t-5-2.6v-2q3.825.375 6.413 3.2T22 12q0 1.8-.587 3.413t-1.638 2.912M9.5 16.5v-9l7 4.5z"></svg:path>`,
})
export class MaterialSymbolsSoundSamplerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundSamplerRoundedIcon],svg[material-symbols-sound-sampler-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12q0-3.6 2.213-6.3T9.8 2.25q.5-.125.85.1t.35.7q0 .5-.325.788t-.825.437q-2.575.7-4.212 2.813T4 12q0 1.1.275 2.113T5.05 16q.25.425.238.85t-.363.775q-.325.325-.7.275t-.625-.45q-.775-1.2-1.187-2.562T2 12m10 10q-1.525 0-2.912-.425t-2.588-1.2q-.375-.25-.425-.638t.25-.712q.325-.35.75-.35t.85.25q.9.525 1.925.8T12 20t2.15-.275t1.925-.8q.425-.25.85-.262t.75.337q.3.325.25.725t-.425.65q-1.2.775-2.587 1.2T12 22m10-10q0 1.525-.413 2.888T20.4 17.45q-.25.4-.625.45t-.7-.275q-.35-.35-.362-.775t.237-.85q.5-.875.775-1.888T20 12q0-2.8-1.638-4.913T14.15 4.275q-.5-.15-.825-.437T13 3.05q0-.475.35-.7t.85-.1q3.375.75 5.588 3.45T22 12M9.5 15.575v-7.15q0-.3.263-.45t.512.025l5.575 3.575q.225.15.225.425t-.225.425L10.275 16q-.25.175-.513.025t-.262-.45"></svg:path>`,
})
export class MaterialSymbolsSoundSamplerRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoundSensingIcon],svg[material-symbols-sound-sensing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22q-.425 0-.712-.288Q9 21.425 9 21V3q0-.425.288-.713Q9.575 2 10 2t.713.287Q11 2.575 11 3v18q0 .425-.287.712Q10.425 22 10 22Zm-4-6q-.425 0-.713-.288Q5 15.425 5 15V9q0-.425.287-.713Q5.575 8 6 8t.713.287Q7 8.575 7 9v6q0 .425-.287.712Q6.425 16 6 16Zm8 2q-.425 0-.712-.288Q13 17.425 13 17V7q0-.425.288-.713Q13.575 6 14 6t.713.287Q15 6.575 15 7v10q0 .425-.287.712Q14.425 18 14 18Zm4-3q-.425 0-.712-.288Q17 14.425 17 14v-4q0-.425.288-.713Q17.575 9 18 9t.712.287Q19 9.575 19 10v4q0 .425-.288.712Q18.425 15 18 15Z"></svg:path>`,
})
export class MaterialSymbolsSoundSensingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoupKitchenIcon],svg[material-symbols-soup-kitchen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.1 13.5q.2-.25.3-.612T5.5 12q0-.75-.5-1.9t-.5-1.725q0-.3.063-.625T4.9 7h1.5q-.275.425-.337.75T6 8.375q0 .575.5 1.725T7 12q0 .525-.1.863t-.3.637zm6.5 0q.2-.25.3-.612T12 12q0-.75-.5-1.9T11 8.375q0-.3.063-.625T11.4 7h1.5q-.275.425-.337.75t-.063.625q0 .575.5 1.725t.5 1.9q0 .525-.1.863t-.3.637zm-3.25 0q.2-.25.3-.612t.1-.888q0-.75-.5-1.9t-.5-1.725q0-.3.063-.625T8.15 7h1.5q-.275.425-.337.75t-.063.625q0 .575.5 1.725t.5 1.9q0 .525-.1.863t-.3.637zm1.4 8.5q-2.525 0-4.437-1.687T3 16.125q-.05-.45.25-.788T4 15h10.525l1.1-10.35q.125-1.125.963-1.888T18.6 2q1.25 0 2.125.875T21.6 5q0 .35-.062.925l-.063.575l-1.975-.25l.05-.513q.05-.512.05-.737q0-.425-.288-.712T18.6 4q-.4 0-.675.263T17.6 4.9l-1.15 10.875q-.275 2.65-2.175 4.438T9.75 22"></svg:path>`,
})
export class MaterialSymbolsSoupKitchenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoupKitchenOutlineIcon],svg[material-symbols-soup-kitchen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.1 13.5q.2-.25.3-.612T5.5 12q0-.75-.5-1.9t-.5-1.725q0-.3.063-.625T4.9 7h1.5q-.275.425-.337.75T6 8.375q0 .575.5 1.725T7 12q0 .525-.1.863t-.3.637zm6.5 0q.2-.25.3-.612T12 12q0-.75-.5-1.9T11 8.375q0-.3.063-.625T11.4 7h1.5q-.275.425-.337.75t-.063.625q0 .575.5 1.725t.5 1.9q0 .525-.1.863t-.3.637zm-3.25 0q.2-.25.3-.612t.1-.888q0-.75-.5-1.9t-.5-1.725q0-.3.063-.625T8.15 7h1.5q-.275.425-.337.75t-.063.625q0 .575.5 1.725t.5 1.9q0 .525-.1.863t-.3.637zm1.4 8.5q-2.525 0-4.45-1.687T3 16.125q-.075-.45.238-.788T4 15h10.525l1.1-10.35q.125-1.125.963-1.888T18.6 2q1.25 0 2.125.875T21.6 5q0 .35-.062.925l-.063.575l-1.975-.25l.05-.513q.05-.512.05-.737q0-.425-.288-.712T18.6 4q-.4 0-.675.263T17.6 4.9l-1.15 10.875q-.275 2.65-2.175 4.438T9.75 22m0-2q1.475 0 2.65-.825T14.1 17H5.325q.575 1.35 1.762 2.175T9.75 20m0-3"></svg:path>`,
})
export class MaterialSymbolsSoupKitchenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoupKitchenOutlineRoundedIcon],svg[material-symbols-soup-kitchen-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 22q-2.525 0-4.437-1.687T3 16.125q-.05-.45.25-.788T4 15h10.525l1.1-10.35q.125-1.125.963-1.888T18.6 2q1.25 0 2.125.875T21.6 5v.25q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V5q0-.425-.288-.712T18.6 4q-.4 0-.675.263T17.6 4.9l-1.15 10.875q-.275 2.65-2.175 4.438T9.75 22m0-2q1.475 0 2.65-.825T14.1 17H5.325q.575 1.35 1.762 2.175T9.75 20m-3.575-6.5q-.425 0-.6-.238t-.125-.637q.025-.225.038-.363T5.5 12q0-.75-.5-1.9t-.5-1.725q0-.225.025-.462t.15-.463q.1-.2.275-.325T5.325 7q.4 0 .613.237t.112.638Q6 8.1 6 8.375q0 .575.5 1.725T7 12q0 .375-.05.625t-.125.425q-.1.2-.275.325t-.375.125m6.5 0q-.425 0-.6-.238t-.125-.637q.025-.225.038-.363T12 12q0-.75-.5-1.9T11 8.375q0-.225.025-.462t.15-.463q.1-.2.275-.325T11.825 7q.4 0 .613.237t.112.638q-.05.225-.05.5q0 .575.5 1.725t.5 1.9q0 .375-.05.625t-.125.425q-.1.2-.275.325t-.375.125m-3.25 0q-.425 0-.6-.238t-.125-.637q.025-.225.038-.363T8.75 12q0-.75-.5-1.9t-.5-1.725q0-.225.025-.462t.15-.463q.1-.2.275-.325T8.575 7q.4 0 .613.237t.112.638q-.05.225-.05.5q0 .575.5 1.725t.5 1.9q0 .375-.05.625t-.125.425q-.1.2-.275.325t-.375.125"></svg:path>`,
})
export class MaterialSymbolsSoupKitchenOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSoupKitchenRoundedIcon],svg[material-symbols-soup-kitchen-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 22q-2.525 0-4.437-1.687T3 16.125q-.05-.45.25-.788T4 15h10.525l1.1-10.35q.125-1.125.963-1.888T18.6 2q1.25 0 2.125.875T21.6 5v.25q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V5q0-.425-.288-.712T18.6 4q-.4 0-.675.263T17.6 4.9l-1.15 10.875q-.275 2.65-2.175 4.438T9.75 22m-3.575-8.5q-.425 0-.6-.238t-.125-.637q.025-.225.038-.363T5.5 12q0-.75-.5-1.9t-.5-1.725q0-.225.025-.462t.15-.463q.1-.2.275-.325T5.325 7q.4 0 .613.237t.112.638Q6 8.1 6 8.375q0 .575.5 1.725T7 12q0 .375-.05.625t-.125.425q-.1.2-.275.325t-.375.125m6.5 0q-.425 0-.6-.238t-.125-.637q.025-.225.038-.363T12 12q0-.75-.5-1.9T11 8.375q0-.225.025-.462t.15-.463q.1-.2.275-.325T11.825 7q.4 0 .613.237t.112.638q-.05.225-.05.5q0 .575.5 1.725t.5 1.9q0 .375-.05.625t-.125.425q-.1.2-.275.325t-.375.125m-3.25 0q-.425 0-.6-.238t-.125-.637q.025-.225.038-.363T8.75 12q0-.75-.5-1.9t-.5-1.725q0-.225.025-.462t.15-.463q.1-.2.275-.325T8.575 7q.4 0 .613.237t.112.638q-.05.225-.05.5q0 .575.5 1.725t.5 1.9q0 .375-.05.625t-.125.425q-.1.2-.275.325t-.375.125"></svg:path>`,
})
export class MaterialSymbolsSoupKitchenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSourceEnvironmentIcon],svg[material-symbols-source-environment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V4.75L7 1l5 3.75V7h10v14zm2-2h2v-2H4zm0-4h2v-2H4zm0-4h2V9H4zm0-4h2V5H4zm4 0h2V5H8zm0 12h12V9H8zm6-6v-2h4v2zm0 4v-2h4v2zm-4-4v-2h2v2zm0 4v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsSourceEnvironmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSourceEnvironmentRoundedIcon],svg[material-symbols-source-environment-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V5.25q0-.25.1-.45t.3-.35l4-3q.275-.2.6-.2t.6.2l4 3q.2.15.3.35t.1.45V7h9q.425 0 .713.288T22 8v12q0 .425-.288.713T21 21H3q-.425 0-.712-.288T2 20m2-1h2v-2H4zm0-4h2v-2H4zm0-4h2V9H4zm0-4h2V5H4zm4 0h2V5H8zm0 12h12V9H8zm7-8h2q.425 0 .713.288T18 12t-.288.713T17 13h-2q-.425 0-.712-.288T14 12t.288-.712T15 11m0 4h2q.425 0 .713.288T18 16t-.288.713T17 17h-2q-.425 0-.712-.288T14 16t.288-.712T15 15m-3-3q0 .425-.288.713T11 13t-.712-.288T10 12t.288-.712T11 11t.713.288T12 12m-1 5q-.425 0-.712-.288T10 16t.288-.712T11 15t.713.288T12 16t-.288.713T11 17"></svg:path>`,
})
export class MaterialSymbolsSourceEnvironmentRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSourceNotesIcon],svg[material-symbols-source-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9h10V7H7zm11 14q-1.825 0-3.187-1.137T13.1 19h1.55q.325 1.1 1.238 1.8t2.112.7q1.45 0 2.475-1.025T21.5 18t-1.025-2.475T18 14.5q-.725 0-1.35.263t-1.1.737H17V17h-4v-4h1.5v1.425q.675-.65 1.575-1.037T18 13q2.075 0 3.538 1.463T23 18t-1.463 3.538T18 23m-7.425-2H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5.575q-.725-.275-1.475-.425T18 10q-1.05 0-2.025.262t-1.85.738H7v2h4.75q-.35.45-.65.95T10.575 15H7v2h3.05q-.05.25-.05.488V18q0 .775.15 1.525T10.575 21"></svg:path>`,
})
export class MaterialSymbolsSourceNotesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSourceNotesOutlineIcon],svg[material-symbols-source-notes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V5zM7 9h10V7H7zm0 4h4.75q.5-.6 1.088-1.112T14.125 11H7zm0 4h3.05q.05-.525.188-1.025t.337-.975H7zm-2 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5.575q-.475-.2-.975-.337T19 10.05V5H5v14h5.05q.05.525.188 1.025t.337.975zm13 2q-1.825 0-3.187-1.137T13.1 19h1.55q.325 1.1 1.238 1.8t2.112.7q1.45 0 2.475-1.025T21.5 18t-1.025-2.475T18 14.5q-.725 0-1.35.263t-1.1.737H17V17h-4v-4h1.5v1.425q.675-.65 1.575-1.037T18 13q2.075 0 3.538 1.463T23 18t-1.463 3.538T18 23"></svg:path>`,
})
export class MaterialSymbolsSourceNotesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSourceNotesOutlineRoundedIcon],svg[material-symbols-source-notes-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23q-1.45 0-2.625-.737t-1.8-1.938q-.15-.275-.037-.575t.387-.425t.563-.037t.437.362q.425.825 1.238 1.338T18 21.5q1.45 0 2.475-1.025T21.5 18t-1.025-2.475T18 14.5q-.725 0-1.35.263t-1.1.737h.7q.325 0 .538.213t.212.537t-.213.538t-.537.212H14q-.425 0-.712-.288T13 16v-2.25q0-.325.213-.537T13.75 13t.538.213t.212.537v.675q.675-.65 1.575-1.037T18 13q2.075 0 3.538 1.463T23 18t-1.463 3.538T18 23M5 19V5zM8 9h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8t.288.713T8 9m0 4h3.25q.425 0 .713-.288T12.25 12t-.288-.712T11.25 11H8q-.425 0-.712.288T7 12t.288.713T8 13m0 4h1.75q.425 0 .713-.288T10.75 16t-.288-.712T9.75 15H8q-.425 0-.712.288T7 16t.288.713T8 17m-3 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .425-.288.713T20 10t-.712-.288T19 9V5H5v14h4q.425 0 .713.288T10 20t-.288.713T9 21z"></svg:path>`,
})
export class MaterialSymbolsSourceNotesOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSourceNotesOutlineSharpIcon],svg[material-symbols-source-notes-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V5zM7 9h10V7H7zm0 4h4.75q.5-.6 1.088-1.112T14.125 11H7zm0 4h3.05q.05-.525.188-1.025t.337-.975H7zm-4 4V3h18v7.575q-.475-.2-.975-.337T19 10.05V5H5v14h5.05q.05.525.188 1.025t.337.975zm15 2q-1.825 0-3.187-1.137T13.1 19h1.55q.325 1.1 1.238 1.8t2.112.7q1.45 0 2.475-1.025T21.5 18t-1.025-2.475T18 14.5q-.725 0-1.35.263t-1.1.737H17V17h-4v-4h1.5v1.425q.675-.65 1.575-1.037T18 13q2.075 0 3.538 1.463T23 18t-1.463 3.538T18 23"></svg:path>`,
})
export class MaterialSymbolsSourceNotesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSourceNotesRoundedIcon],svg[material-symbols-source-notes-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23q-1.45 0-2.625-.737t-1.8-1.938q-.15-.275-.037-.575t.387-.425t.563-.037t.437.362q.425.825 1.238 1.338T18 21.5q1.45 0 2.475-1.025T21.5 18t-1.025-2.475T18 14.5q-.725 0-1.35.263t-1.1.737h.7q.325 0 .538.213t.212.537t-.213.538t-.537.212H14q-.425 0-.712-.288T13 16v-2.25q0-.325.213-.537T13.75 13t.538.213t.212.537v.675q.675-.65 1.575-1.037T18 13q2.075 0 3.538 1.463T23 18t-1.463 3.538T18 23M8 9h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8t.288.713T8 9M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4.375q0 .45-.363.713t-.787.137q-.45-.125-.913-.175T18 10q-1.05 0-2.025.263t-1.85.737H8q-.425 0-.712.288T7 12t.288.713T8 13h3.75q-.35.45-.65.95T10.575 15H8q-.425 0-.712.288T7 16t.288.713T8 17h2.05q-.05.25-.05.488V18q0 .475.05.938t.175.912q.1.425-.162.788T9.375 21z"></svg:path>`,
})
export class MaterialSymbolsSourceNotesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSourceNotesSharpIcon],svg[material-symbols-source-notes-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9h10V7H7zm11 14q-1.825 0-3.187-1.137T13.1 19h1.55q.325 1.1 1.238 1.8t2.112.7q1.45 0 2.475-1.025T21.5 18t-1.025-2.475T18 14.5q-.725 0-1.35.263t-1.1.737H17V17h-4v-4h1.5v1.425q.675-.65 1.575-1.037T18 13q2.075 0 3.538 1.463T23 18t-1.463 3.538T18 23M3 21V3h18v7.575q-.725-.275-1.475-.425T18 10q-1.05 0-2.025.262t-1.85.738H7v2h4.75q-.35.45-.65.95T10.575 15H7v2h3.05q-.05.25-.05.488V18q0 .775.15 1.525T10.575 21z"></svg:path>`,
})
export class MaterialSymbolsSourceNotesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSouthIcon],svg[material-symbols-south-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l-7-7l1.4-1.4l4.6 4.575V2h2v16.175l4.6-4.6L19 15z"></svg:path>`,
})
export class MaterialSymbolsSouthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSouthAmericaIcon],svg[material-symbols-south-america-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2l-.7-.7q-.15-.15-.225-.325T11 18.6V13q-.825 0-1.412-.587T9 11v-1L5.875 6.875Q5 7.925 4.5 9.225T4 12q0 3.35 2.325 5.675T12 20m1-.05q2.975-.375 4.988-2.625T20 12q0-3.325-2.337-5.663T12 4q-1.1 0-2.113.288T8 5.075V7h3.55q.45 0 .863.2t.687.55l1.4 1.75H16q.425 0 .713.288T17 10.5v1.05q0 .225-.062.425t-.188.4L13 18z"></svg:path>`,
})
export class MaterialSymbolsSouthAmericaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSouthEastIcon],svg[material-symbols-south-east-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19v-2h6.6L4 5.4L5.4 4L17 15.6V9h2v10z"></svg:path>`,
})
export class MaterialSymbolsSouthEastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSouthEastRoundedIcon],svg[material-symbols-south-east-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.6 17L4.7 6.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L17 15.6V10q0-.425.288-.712T18 9t.713.288T19 10v8q0 .425-.288.713T18 19h-8q-.425 0-.712-.288T9 18t.288-.712T10 17z"></svg:path>`,
})
export class MaterialSymbolsSouthEastRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSouthRoundedIcon],svg[material-symbols-south-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.575q-.2 0-.375-.062T11.3 21.3l-5.6-5.6q-.275-.275-.275-.7t.275-.7q.3-.3.713-.287t.687.287l3.9 3.875V3q0-.425.288-.712T12 2t.713.288T13 3v15.175l3.875-3.875q.3-.3.713-.3t.712.3q.275.3.275.713t-.275.687l-5.6 5.6q-.15.15-.325.213t-.375.062"></svg:path>`,
})
export class MaterialSymbolsSouthRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSouthWestIcon],svg[material-symbols-south-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V9h2v6.6L18.6 4L20 5.4L8.4 17H15v2z"></svg:path>`,
})
export class MaterialSymbolsSouthWestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSouthWestRoundedIcon],svg[material-symbols-south-west-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19q-.425 0-.712-.288T5 18v-8q0-.425.288-.712T6 9t.713.288T7 10v5.6L17.9 4.7q.275-.275.7-.275t.7.275t.275.7t-.275.7L8.4 17H14q.425 0 .713.288T15 18t-.288.713T14 19z"></svg:path>`,
})
export class MaterialSymbolsSouthWestRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaIcon],svg[material-symbols-spa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.35-.3-4.2-1.2t-3.137-2.35T2.7 15.088t-.675-4.238q2.75.275 4.65 1t3.088 2.05t1.712 3.313T12 22m0-8.425q-.575-.875-1.562-1.725T8.15 10.3q.15-1.05.5-2.175t.85-2.212t1.138-2.088T12 2q.725.825 1.363 1.825T14.5 5.913t.85 2.212t.5 2.175q-1.3.675-2.287 1.525T12 13.575m2 8.025q-.05-1.75-.262-3.238t-.663-2.812q1.175-2.025 3.238-3.3t5.662-1.4q.025 3.95-2.113 6.813T14 21.6"></svg:path>`,
})
export class MaterialSymbolsSpaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaOutlineIcon],svg[material-symbols-spa-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-1.825-.225-3.625-.987t-3.212-2.188t-2.288-3.6T2 10V9h1q1.275 0 2.625.325t2.525.975q.3-2.15 1.363-4.413T12 2q1.425 1.625 2.488 3.888T15.85 10.3q1.175-.65 2.525-.975T21 9h1v1q0 3.05-.875 5.225t-2.287 3.6t-3.2 2.188T12 22m-.05-2.05q-.275-4.15-2.463-6.275T4.05 11.05q.275 4.275 2.538 6.375t5.362 2.525M12 13.6q.375-.55.913-1.137t1.037-1.013q-.05-1.425-.562-2.975T12 5.45q-.875 1.475-1.388 3.025t-.562 2.975q.5.425 1.05 1.013T12 13.6m1.95 5.9q.925-.3 1.925-.875t1.863-1.562t1.475-2.463t.737-3.55q-2.35.35-4.125 1.563T13.1 15.7q.3.8.513 1.75t.337 2.05M12 22"></svg:path>`,
})
export class MaterialSymbolsSpaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaOutlineRoundedIcon],svg[material-symbols-spa-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.2 21.875q-1.75-.325-3.4-1.125t-2.937-2.225T2.788 15T2 10v-.2q0-.35.225-.575T2.8 9H3q1.275 0 2.625.325t2.525.975q.275-1.85 1.1-3.8t1.975-3.525q.3-.425.775-.425t.775.425Q13.925 4.55 14.75 6.5t1.1 3.8q1.175-.65 2.525-.975T21 9h.1q.375 0 .638.263T22 9.9v.1q0 2.9-.788 5t-2.075 3.525T16.2 20.75t-3.4 1.125q-.325.05-.8.05t-.8-.05m.75-1.925q-.275-4.125-2.488-6.262T4.05 11.05q-.05 0 0 0q.275 4.225 2.563 6.35t5.337 2.55q.05.025 0 .013t0-.013m-1.9-8.5q.5.425 1.05 1.013T12 13.6q.375-.55.913-1.137t1.037-1.013q-.05-1.425-.562-2.975T12 5.45v.013v-.013q-.875 1.475-1.388 3.025t-.562 2.975m3.05 4.25q.3.8.513 1.75t.337 2.05q.9-.3 1.9-.9T17.7 17t1.475-2.462t.775-3.488q0-.05 0 0q-2.35.35-4.125 1.563T13.1 15.7"></svg:path>`,
})
export class MaterialSymbolsSpaOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaRoundedIcon],svg[material-symbols-spa-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.85 21.925q-4.35-.65-6.9-3.363t-2.9-7.387q-.025-.275.063-.488t.237-.362t.363-.225t.462-.025q4.575.625 7.05 3.525t2.75 7.25q.025.225-.062.438t-.263.362q-.15.15-.363.238t-.437.037m.15-9.3q-.35-.55-1.612-1.612T8.25 9.6q.2-1.25 1.013-3.162T11.2 2.975q.15-.2.363-.3t.437-.1t.425.1t.35.325q1.125 1.575 1.963 3.45T15.75 9.6q-.975.45-2.175 1.463T12 12.625m2.95 8.575q-.05-1.525-.462-3.462T13.2 14.4q1.075-1.65 3.188-2.85t4.462-1.475q.25-.05.45.038t.35.237t.238.35t.062.45q-.2 4.025-2.187 6.538T14.95 21.2"></svg:path>`,
})
export class MaterialSymbolsSpaRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaceBarIcon],svg[material-symbols-space-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15V9h2v4h12V9h2v6z"></svg:path>`,
})
export class MaterialSymbolsSpaceBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaceBarRoundedIcon],svg[material-symbols-space-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15q-.825 0-1.412-.587T4 13v-3q0-.425.288-.712T5 9t.713.288T6 10v3h12v-3q0-.425.288-.712T19 9t.713.288T20 10v3q0 .825-.587 1.413T18 15z"></svg:path>`,
})
export class MaterialSymbolsSpaceBarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaceDashboardIcon],svg[material-symbols-space-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6v18zm8 0v-9h8v7q0 .825-.587 1.413T19 21zm0-11V3h6q.825 0 1.413.588T21 5v5z"></svg:path>`,
})
export class MaterialSymbolsSpaceDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaceDashboardOutlineIcon],svg[material-symbols-space-dashboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h6V5H5zm8 0h6v-7h-6zm0-9h6V5h-6z"></svg:path>`,
})
export class MaterialSymbolsSpaceDashboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaceDashboardOutlineRoundedIcon],svg[material-symbols-space-dashboard-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h6V5H5v14Zm8 0h6v-7h-6v7Zm0-9h6V5h-6v5Z"></svg:path>`,
})
export class MaterialSymbolsSpaceDashboardOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaceDashboardOutlineSharpIcon],svg[material-symbols-space-dashboard-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2-2h6V5H5zm8 0h6v-7h-6zm0-9h6V5h-6z"></svg:path>`,
})
export class MaterialSymbolsSpaceDashboardOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaceDashboardRoundedIcon],svg[material-symbols-space-dashboard-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zm10 0q-.825 0-1.412-.587T13 19v-5q0-.825.588-1.412T15 12h4q.825 0 1.413.588T21 14v5q0 .825-.587 1.413T19 21zm0-11q-.825 0-1.412-.587T13 8V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v3q0 .825-.587 1.413T19 10z"></svg:path>`,
})
export class MaterialSymbolsSpaceDashboardRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpaceDashboardSharpIcon],svg[material-symbols-space-dashboard-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h8v18zm10-11V3h8v7zm8 11h-8v-9h8z"></svg:path>`,
})
export class MaterialSymbolsSpaceDashboardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialAudioIcon],svg[material-symbols-spatial-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10.025q-1.8 0-3.45-.687t-2.925-1.963t-1.963-2.925T13.976 1h2q0 1.425.525 2.7t1.525 2.275T20.3 7.513t2.7.537zm0-3.975q-1.025 0-1.937-.375t-1.638-1.1t-1.1-1.638T17.95 1h1.975q0 .625.238 1.188t.662.987t.988.65T23 4.05zM10 13q-1.65 0-2.825-1.175T6 9t1.175-2.825T10 5t2.825 1.175T14 9t-1.175 2.825T10 13m-8 8v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T18 18.2V21z"></svg:path>`,
})
export class MaterialSymbolsSpatialAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialAudioOffIcon],svg[material-symbols-spatial-audio-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.75 13.75l1.4-1.4q-1-1-1.562-2.287t-.563-2.713t.563-2.7t1.562-2.275l-1.4-1.45q-1.275 1.275-2 2.95t-.725 3.475t.725 3.463t2 2.937m2.8-2.85l1.4-1.4q-.425-.425-.675-.975t-.25-1.175t.25-1.175t.675-.975l-1.4-1.425q-.725.725-1.125 1.625t-.4 1.925t.4 1.95T21.55 10.9M10 13q-1.65 0-2.825-1.175T6 9t1.175-2.825T10 5t2.825 1.175T14 9t-1.175 2.825T10 13m-8 8v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T18 18.2V21z"></svg:path>`,
})
export class MaterialSymbolsSpatialAudioOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialAudioOffOutlineIcon],svg[material-symbols-spatial-audio-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.75 13.75l1.4-1.4q-1-1-1.562-2.287t-.563-2.713t.563-2.7t1.562-2.275l-1.4-1.45q-1.275 1.275-2 2.95t-.725 3.475t.725 3.463t2 2.937m2.8-2.85l1.4-1.4q-.425-.425-.675-.975t-.25-1.175t.25-1.175t.675-.975l-1.4-1.425q-.725.725-1.125 1.625t-.4 1.925t.4 1.95T21.55 10.9M10 13q-1.65 0-2.825-1.175T6 9t1.175-2.825T10 5t2.825 1.175T14 9t-1.175 2.825T10 13m-8 8v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T18 18.2V21zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-.9-.45-2.312-.9T10 16t-3.187.45t-2.313.9q-.225.125-.363.35T4 18.2zm6-8q.825 0 1.413-.587T12 9t-.587-1.412T10 7t-1.412.588T8 9t.588 1.413T10 11m0 8"></svg:path>`,
})
export class MaterialSymbolsSpatialAudioOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialAudioOffOutlineRoundedIcon],svg[material-symbols-spatial-audio-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.25 11.2q-.2 0-.387-.087t-.313-.213q-.725-.7-1.125-1.625t-.4-1.95t.4-1.925t1.125-1.625q.125-.125.313-.2t.387-.075q.425 0 .713.275t.287.7q0 .2-.088.4t-.212.325q-.425.425-.675.975t-.25 1.175t.25 1.175t.675.975q.125.125.213.313t.087.387q0 .425-.288.713t-.712.287m-2.8 2.85q-.2 0-.387-.088t-.313-.212q-1.275-1.275-2-2.937t-.725-3.463t.725-3.475t2-2.95q.125-.125.313-.2T19.45.65q.425 0 .713.288t.287.712q0 .2-.075.4t-.225.325q-1 1-1.562 2.275t-.563 2.7t.563 2.713t1.562 2.287q.125.125.213.313t.087.387q0 .425-.287.713t-.713.287M10 13q-1.65 0-2.825-1.175T6 9t1.175-2.825T10 5t2.825 1.175T14 9t-1.175 2.825T10 13m-8 6v-.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T18 18.2v.8q0 .825-.587 1.413T16 21H4q-.825 0-1.412-.587T2 19m2 0h12v-.8q0-.275-.137-.5t-.363-.35q-.9-.45-2.312-.9T10 16t-3.187.45t-2.313.9q-.225.125-.363.35T4 18.2zm6-8q.825 0 1.413-.587T12 9t-.587-1.412T10 7t-1.412.588T8 9t.588 1.413T10 11m0 8"></svg:path>`,
})
export class MaterialSymbolsSpatialAudioOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialAudioOffRoundedIcon],svg[material-symbols-spatial-audio-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13q-1.65 0-2.825-1.175T6 9t1.175-2.825T10 5t2.825 1.175T14 9t-1.175 2.825T10 13m-8 6v-.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T18 18.2v.8q0 .825-.587 1.413T16 21H4q-.825 0-1.412-.587T2 19m20.25-7.8q-.2 0-.387-.088t-.313-.212q-.725-.7-1.125-1.625t-.4-1.95t.4-1.925t1.125-1.625q.125-.125.313-.2t.387-.075q.425 0 .713.275t.287.7q0 .2-.088.4t-.212.325q-.425.425-.675.975t-.25 1.175t.25 1.175t.675.975q.125.125.213.313t.087.387q0 .425-.288.713t-.712.287m-2.8 2.85q-.2 0-.387-.088t-.313-.212q-1.275-1.275-2-2.937t-.725-3.463t.725-3.475t2-2.95q.125-.125.313-.2T19.45.65q.425 0 .713.288t.287.712q0 .2-.075.4t-.225.325q-1 1-1.562 2.275t-.563 2.7t.563 2.713t1.562 2.287q.125.125.213.313t.087.387q0 .425-.287.713t-.713.287"></svg:path>`,
})
export class MaterialSymbolsSpatialAudioOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialAudioOutlineIcon],svg[material-symbols-spatial-audio-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10.025q-1.8 0-3.45-.687t-2.925-1.963t-1.963-2.925T13.976 1h2q0 1.425.525 2.7t1.525 2.275T20.3 7.513t2.7.537zm0-3.975q-1.025 0-1.937-.375t-1.638-1.1t-1.1-1.638T17.95 1h1.975q0 .625.238 1.188t.662.987t.988.65T23 4.05zM10 13q-1.65 0-2.825-1.175T6 9t1.175-2.825T10 5t2.825 1.175T14 9t-1.175 2.825T10 13m-8 8v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T18 18.2V21zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-.9-.45-2.312-.9T10 16t-3.187.45t-2.313.9q-.225.125-.363.35T4 18.2zm6-8q.825 0 1.413-.587T12 9t-.587-1.412T10 7t-1.412.588T8 9t.588 1.413T10 11m0 8"></svg:path>`,
})
export class MaterialSymbolsSpatialAudioOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialAudioOutlineRoundedIcon],svg[material-symbols-spatial-audio-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.625 7.375q-1.1-1.1-1.763-2.475T14.026 2q-.05-.425.238-.712T14.975 1t.725.288t.35.712q.15 1.125.663 2.15t1.312 1.825t1.825 1.313t2.15.687q.425.05.713.338t.287.712t-.288.713t-.712.237q-1.525-.175-2.9-.837t-2.475-1.763m2.8-2.8q-.55-.55-.9-1.213T18.05 1.95q-.075-.375.2-.662t.7-.288q.4 0 .7.263t.425.662q.125.35.3.663t.45.587t.575.438t.65.287q.4.125.675.425T23 5.05t-.3.7t-.7.2q-.725-.15-1.375-.5t-1.2-.875M10 13q-1.65 0-2.825-1.175T6 9t1.175-2.825T10 5t2.825 1.175T14 9t-1.175 2.825T10 13m-8 6v-.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T18 18.2v.8q0 .825-.587 1.413T16 21H4q-.825 0-1.412-.587T2 19m2 0h12v-.8q0-.275-.137-.5t-.363-.35q-.9-.45-2.312-.9T10 16t-3.187.45t-2.313.9q-.225.125-.363.35T4 18.2zm6-8q.825 0 1.413-.587T12 9t-.587-1.412T10 7t-1.412.588T8 9t.588 1.413T10 11m0 8"></svg:path>`,
})
export class MaterialSymbolsSpatialAudioOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialAudioRoundedIcon],svg[material-symbols-spatial-audio-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.625 7.375q-1.1-1.1-1.763-2.475T14.026 2q-.05-.425.238-.712T14.975 1t.725.288t.35.712q.15 1.125.663 2.15t1.312 1.825t1.825 1.313t2.15.687q.425.05.713.338t.287.712t-.288.713t-.712.237q-1.525-.175-2.9-.837t-2.475-1.763m2.8-2.8q-.55-.55-.9-1.213T18.05 1.95q-.075-.375.2-.662t.7-.288q.4 0 .7.263t.425.662q.125.35.3.663t.45.587t.575.438t.65.287q.4.125.675.425T23 5.05t-.3.7t-.7.2q-.725-.15-1.375-.5t-1.2-.875M10 13q-1.65 0-2.825-1.175T6 9t1.175-2.825T10 5t2.825 1.175T14 9t-1.175 2.825T10 13m-8 6v-.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T18 18.2v.8q0 .825-.587 1.413T16 21H4q-.825 0-1.412-.587T2 19"></svg:path>`,
})
export class MaterialSymbolsSpatialAudioRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialSpeakerIcon],svg[material-symbols-spatial-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22q-3.35 0-5.675-2.325T1 14h2q0 2.5 1.75 4.25T9 20zm0-3.5q-1.875 0-3.187-1.312T4.5 14h2q0 1.05.725 1.775T9 16.5zm1-3.5q-.825 0-1.412-.587T8 13V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v8q0 .825-.587 1.413T14 15zm5 3.5v-2q1.05 0 1.775-.725T17.5 14h2q0 1.875-1.312 3.188T15 18.5m0 3.5v-2q2.5 0 4.25-1.75T21 14h2q0 3.35-2.325 5.675T15 22"></svg:path>`,
})
export class MaterialSymbolsSpatialSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialSpeakerOutlineIcon],svg[material-symbols-spatial-speaker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22q-3.35 0-5.675-2.325T1 14h2q0 2.5 1.75 4.25T9 20zm0-3.5q-1.875 0-3.187-1.312T4.5 14h2q0 1.05.725 1.775T9 16.5zm1-3.5q-.825 0-1.412-.587T8 13V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v8q0 .825-.587 1.413T14 15zm0-2h4V5h-4zm5 5.5v-2q1.05 0 1.775-.725T17.5 14h2q0 1.875-1.312 3.188T15 18.5m0 3.5v-2q2.5 0 4.25-1.75T21 14h2q0 3.35-2.325 5.675T15 22m-5-9h4z"></svg:path>`,
})
export class MaterialSymbolsSpatialSpeakerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialSpeakerOutlineRoundedIcon],svg[material-symbols-spatial-speaker-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.975 22q-2.9-.025-4.925-2.05T1 15.025q0-.425.288-.725T2 14t.713.288T3 15q0 2.075 1.463 3.538T8 20q.425 0 .713.288T9 21t-.3.713t-.725.287m8.05 0q-.425 0-.725-.288T15 21t.288-.712T16 20q2.075 0 3.538-1.463T21 15q0-.425.288-.712T22 14t.713.288T23 15q-.025 2.9-2.05 4.938T16.025 22m-8.05-3.5q-1.425-.025-2.437-1.037T4.5 15.024q0-.425.288-.725T5.5 14t.713.288T6.5 15q0 .3.113.575t.324.488t.488.325T8 16.5q.425 0 .713.288T9 17.5t-.3.713t-.725.287m8.05 0q-.425 0-.725-.288T15 17.5t.288-.712T16 16.5q.3 0 .575-.112t.488-.326t.325-.487T17.5 15q0-.425.288-.712T18.5 14t.713.288t.287.712q-.025 1.45-1.025 2.463t-2.45 1.037M10 15q-.825 0-1.412-.587T8 13V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v8q0 .825-.587 1.413T14 15zm0-2h4V5h-4zm0 0h4z"></svg:path>`,
})
export class MaterialSymbolsSpatialSpeakerOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialSpeakerOutlineSharpIcon],svg[material-symbols-spatial-speaker-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22q-3.35 0-5.675-2.325T1 14h2q0 2.5 1.75 4.25T9 20zm0-3.5q-1.875 0-3.187-1.312T4.5 14h2q0 1.05.725 1.775T9 16.5zM8 15V3h8v12zm2-2h4V5h-4zm5 5.5v-2q1.05 0 1.775-.725T17.5 14h2q0 1.875-1.312 3.188T15 18.5m0 3.5v-2q2.5 0 4.25-1.75T21 14h2q0 3.35-2.325 5.675T15 22m-5-9h4z"></svg:path>`,
})
export class MaterialSymbolsSpatialSpeakerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialSpeakerRoundedIcon],svg[material-symbols-spatial-speaker-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15q-.825 0-1.412-.587T8 13V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v8q0 .825-.587 1.413T14 15zm-2.025 7q-2.9-.025-4.925-2.05T1 15.025q0-.425.288-.725T2 14t.713.288T3 15q0 2.075 1.463 3.538T8 20q.425 0 .713.288T9 21t-.3.713t-.725.287m8.05 0q-.425 0-.725-.288T15 21t.288-.712T16 20q2.075 0 3.538-1.463T21 15q0-.425.288-.712T22 14t.713.288T23 15q-.025 2.9-2.05 4.938T16.025 22m-8.05-3.5q-1.425-.025-2.437-1.037T4.5 15.024q0-.425.288-.725T5.5 14t.713.288T6.5 15q0 .3.113.575t.324.488t.488.325T8 16.5q.425 0 .713.288T9 17.5t-.3.713t-.725.287m8.05 0q-.425 0-.725-.288T15 17.5t.288-.712T16 16.5q.3 0 .575-.112t.488-.326t.325-.487T17.5 15q0-.425.288-.712T18.5 14t.713.288t.287.712q-.025 1.45-1.025 2.463t-2.45 1.037"></svg:path>`,
})
export class MaterialSymbolsSpatialSpeakerRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialSpeakerSharpIcon],svg[material-symbols-spatial-speaker-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22q-3.35 0-5.675-2.325T1 14h2q0 2.5 1.75 4.25T9 20zm0-3.5q-1.875 0-3.187-1.312T4.5 14h2q0 1.05.725 1.775T9 16.5zM8 15V3h8v12zm7 3.5v-2q1.05 0 1.775-.725T17.5 14h2q0 1.875-1.312 3.188T15 18.5m0 3.5v-2q2.5 0 4.25-1.75T21 14h2q0 3.35-2.325 5.675T15 22"></svg:path>`,
})
export class MaterialSymbolsSpatialSpeakerSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialTrackingIcon],svg[material-symbols-spatial-tracking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13q-1.65 0-2.825-1.175T8 9t1.175-2.825T12 5t2.825 1.175T16 9t-1.175 2.825T12 13m-8 8v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T12 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T20 18.2V21zM.975 5V3q.425 0 .775-.162t.625-.438t.425-.625T2.95 1h2.025q0 .825-.312 1.55T3.8 3.825t-1.275.863T.975 5m0 4.025v-2q1.275 0 2.363-.475t1.887-1.3T6.5 3.338T6.975 1H9q0 1.65-.625 3.113T6.65 6.675T4.1 8.4t-3.125.625m22.025 0q-1.65 0-3.113-.625t-2.562-1.725T15.6 4.113T14.975 1h2q0 1.25.475 2.338t1.3 1.912t1.913 1.3T23 7.025zM23 5q-.825 0-1.55-.312t-1.275-.863t-.862-1.275T19 1h2q0 .425.163.775t.437.625t.625.438T23 3z"></svg:path>`,
})
export class MaterialSymbolsSpatialTrackingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialTrackingOutlineIcon],svg[material-symbols-spatial-tracking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13q-1.65 0-2.825-1.175T8 9t1.175-2.825T12 5t2.825 1.175T16 9t-1.175 2.825T12 13m-8 8v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T12 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T20 18.2V21zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-.9-.45-2.312-.9T12 16t-3.187.45t-2.313.9q-.225.125-.363.35T6 18.2zm6-8q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11M.975 5V3q.425 0 .775-.162t.625-.438t.425-.625T2.95 1h2.025q0 .825-.312 1.55T3.8 3.825t-1.275.863T.975 5m0 4.025v-2q1.275 0 2.363-.475t1.887-1.3T6.5 3.338T6.975 1H9q0 1.65-.625 3.113T6.65 6.675T4.1 8.4t-3.125.625m22.025 0q-1.65 0-3.113-.625t-2.562-1.725T15.6 4.113T14.975 1h2q0 1.25.475 2.338t1.3 1.912t1.913 1.3T23 7.025zM23 5q-.825 0-1.55-.312t-1.275-.863t-.862-1.275T19 1h2q0 .425.163.775t.437.625t.625.438T23 3zM12 19"></svg:path>`,
})
export class MaterialSymbolsSpatialTrackingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialTrackingOutlineRoundedIcon],svg[material-symbols-spatial-tracking-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13q-1.65 0-2.825-1.175T8 9t1.175-2.825T12 5t2.825 1.175T16 9t-1.175 2.825T12 13m-8 5.2q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T12 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T20 18.2v.8q0 .825-.587 1.413T18 21H6q-.825 0-1.412-.587T4 19zm2 .8h12v-.8q0-.275-.137-.5t-.363-.35q-.9-.45-2.312-.9T12 16t-3.187.45t-2.313.9q-.225.125-.363.35T6 18.2zm6-8q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11M3.8 3.825q-.55.55-1.275.863T.975 5Q.55 5 .263 4.712T-.025 4t.288-.712T.974 3t.775-.162t.625-.438t.425-.625T2.95 1t.3-.725t.725-.3t.713.3t.287.725q0 .825-.312 1.55T3.8 3.825m2.85 2.85Q5.55 7.775 4.1 8.4t-3.125.625q-.425 0-.712-.288t-.288-.712t.288-.712t.712-.288q1.275 0 2.363-.475t1.887-1.3T6.5 3.35T6.975 1q0-.425.3-.725T8-.025t.713.3T9 1q0 1.65-.625 3.113T6.65 6.675m10.675 0q-1.1-1.1-1.725-2.55T14.95 1q0-.425.3-.725t.725-.3t.713.3t.287.725q0 1.25.475 2.338t1.3 1.912t1.913 1.3T23 7.025q.425 0 .713.287t.287.713t-.288.713t-.712.287q-1.675 0-3.125-.625t-2.55-1.725m2.85-2.85q-.55-.55-.862-1.275T18.975 1q0-.425.3-.725t.725-.3t.713.3T21 1t.163.775t.437.625t.625.438T23 3t.713.288T24 4t-.288.713T23 5q-.825 0-1.55-.312t-1.275-.863M12 19"></svg:path>`,
})
export class MaterialSymbolsSpatialTrackingOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpatialTrackingRoundedIcon],svg[material-symbols-spatial-tracking-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13q-1.65 0-2.825-1.175T8 9t1.175-2.825T12 5t2.825 1.175T16 9t-1.175 2.825T12 13m-8 5.2q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T12 14t3.525.45t2.875 1.1q.75.375 1.175 1.1T20 18.2v.8q0 .825-.587 1.413T18 21H6q-.825 0-1.412-.587T4 19zM3.8 3.825q-.55.55-1.275.862T.975 5Q.55 5 .263 4.712T-.025 4t.288-.712T.974 3t.775-.162t.625-.438t.425-.625T2.95 1t.3-.725t.725-.3t.713.3t.287.725q0 .825-.312 1.55T3.8 3.825m2.85 2.85Q5.55 7.775 4.1 8.4t-3.125.625q-.425 0-.712-.288t-.288-.712t.288-.712t.712-.288q1.275 0 2.363-.475t1.887-1.3T6.5 3.35T6.975 1q0-.425.3-.725T8-.025t.713.3T9 1q0 1.65-.625 3.113T6.65 6.675m10.675 0q-1.1-1.1-1.725-2.55T14.95 1q0-.425.3-.725t.725-.3t.713.3t.287.725q0 1.25.475 2.338t1.3 1.912t1.913 1.3T23 7.025q.425 0 .713.287t.287.713t-.288.713t-.712.287q-1.675 0-3.125-.625t-2.55-1.725m2.85-2.85q-.55-.55-.862-1.275T18.975 1q0-.425.3-.725t.725-.3t.713.3T21 1t.163.775t.437.625t.625.438T23 3t.713.288T24 4t-.288.713T23 5q-.825 0-1.55-.312t-1.275-.863"></svg:path>`,
})
export class MaterialSymbolsSpatialTrackingRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerIcon],svg[material-symbols-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22H7q-.825 0-1.412-.587T5 20V4q0-.825.588-1.412T7 2h10q.825 0 1.413.588T19 4v16q0 .825-.587 1.413T17 22M12 9q.825 0 1.413-.587T14 7t-.587-1.412T12 5t-1.412.588T10 7t.588 1.413T12 9m0 10q1.65 0 2.825-1.175T16 15t-1.175-2.825T12 11t-2.825 1.175T8 15t1.175 2.825T12 19m0-2q-.825 0-1.412-.587T10 15t.588-1.412T12 13t1.413.588T14 15t-.587 1.413T12 17"></svg:path>`,
})
export class MaterialSymbolsSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerGroupIcon],svg[material-symbols-speaker-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19q-.825 0-1.412-.587T8 17V3q0-.825.588-1.412T10 1h9q.825 0 1.413.588T21 3v14q0 .825-.587 1.413T19 19zm4.5-11.5q.625 0 1.063-.437T16 6t-.437-1.062T14.5 4.5t-1.062.438T13 6t.438 1.063T14.5 7.5m0 8.5q1.45 0 2.475-1.025T18 12.5t-1.025-2.475T14.5 9t-2.475 1.025T11 12.5t1.025 2.475T14.5 16m0-2q-.625 0-1.062-.437T13 12.5t.438-1.062T14.5 11t1.063.438T16 12.5t-.437 1.063T14.5 14m1.5 9H6q-.825 0-1.412-.587T4 21V5h2v16h10z"></svg:path>`,
})
export class MaterialSymbolsSpeakerGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerGroupOutlineIcon],svg[material-symbols-speaker-group-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17h9V3h-9zm0 2q-.825 0-1.412-.587T8 17V3q0-.825.588-1.412T10 1h9q.825 0 1.413.588T21 3v14q0 .825-.587 1.413T19 19zm4.5-11.5q.625 0 1.063-.437T16 6t-.437-1.062T14.5 4.5t-1.062.438T13 6t.438 1.063T14.5 7.5m0 8.5q1.45 0 2.475-1.025T18 12.5t-1.025-2.475T14.5 9t-2.475 1.025T11 12.5t1.025 2.475T14.5 16m0-2q-.625 0-1.062-.437T13 12.5t.438-1.062T14.5 11t1.063.438T16 12.5t-.437 1.063T14.5 14m1.5 9H6q-.825 0-1.412-.587T4 21V5h2v16h10zM10 3v14z"></svg:path>`,
})
export class MaterialSymbolsSpeakerGroupOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerGroupOutlineRoundedIcon],svg[material-symbols-speaker-group-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17h9V3h-9zm0 2q-.825 0-1.412-.587T8 17V3q0-.825.588-1.412T10 1h9q.825 0 1.413.588T21 3v14q0 .825-.587 1.413T19 19zm4.5-11.5q.625 0 1.063-.437T16 6t-.437-1.062T14.5 4.5t-1.062.438T13 6t.438 1.063T14.5 7.5m0 8.5q1.45 0 2.475-1.025T18 12.5t-1.025-2.475T14.5 9t-2.475 1.025T11 12.5t1.025 2.475T14.5 16m0-2q-.625 0-1.062-.437T13 12.5t.438-1.062T14.5 11t1.063.438T16 12.5t-.437 1.063T14.5 14m.5 9H6q-.825 0-1.412-.587T4 21V6q0-.425.288-.712T5 5t.713.288T6 6v15h9q.425 0 .713.288T16 22t-.288.713T15 23M10 3v14z"></svg:path>`,
})
export class MaterialSymbolsSpeakerGroupOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerGroupOutlineSharpIcon],svg[material-symbols-speaker-group-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17h9V3h-9zm-2 2V1h13v18zm6.5-11.5q.625 0 1.063-.437T16 6t-.437-1.062T14.5 4.5t-1.062.438T13 6t.438 1.063T14.5 7.5m0 8.5q1.45 0 2.475-1.025T18 12.5t-1.025-2.475T14.5 9t-2.475 1.025T11 12.5t1.025 2.475T14.5 16m0-2q-.625 0-1.062-.437T13 12.5t.438-1.062T14.5 11t1.063.438T16 12.5t-.437 1.063T14.5 14m1.5 9H4V5h2v16h10zM10 3v14z"></svg:path>`,
})
export class MaterialSymbolsSpeakerGroupOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerGroupRoundedIcon],svg[material-symbols-speaker-group-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19q-.825 0-1.412-.587T8 17V3q0-.825.588-1.412T10 1h9q.825 0 1.413.588T21 3v14q0 .825-.587 1.413T19 19zm4.5-11.5q.625 0 1.063-.437T16 6t-.437-1.062T14.5 4.5t-1.062.438T13 6t.438 1.063T14.5 7.5m0 8.5q1.45 0 2.475-1.025T18 12.5t-1.025-2.475T14.5 9t-2.475 1.025T11 12.5t1.025 2.475T14.5 16m0-2q-.625 0-1.062-.437T13 12.5t.438-1.062T14.5 11t1.063.438T16 12.5t-.437 1.063T14.5 14m.5 9H6q-.825 0-1.412-.587T4 21V6q0-.425.288-.712T5 5t.713.288T6 6v15h9q.425 0 .713.288T16 22t-.288.713T15 23"></svg:path>`,
})
export class MaterialSymbolsSpeakerGroupRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerGroupSharpIcon],svg[material-symbols-speaker-group-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19V1h13v18zm6.5-11.5q.625 0 1.063-.437T16 6t-.437-1.062T14.5 4.5t-1.062.438T13 6t.438 1.063T14.5 7.5m0 8.5q1.45 0 2.475-1.025T18 12.5t-1.025-2.475T14.5 9t-2.475 1.025T11 12.5t1.025 2.475T14.5 16m0-2q-.625 0-1.062-.437T13 12.5t.438-1.062T14.5 11t1.063.438T16 12.5t-.437 1.063T14.5 14m1.5 9H4V5h2v16h10z"></svg:path>`,
})
export class MaterialSymbolsSpeakerGroupSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesIcon],svg[material-symbols-speaker-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-3q.425 0 .713-.288T8 10t-.288-.712T7 9t-.712.288T6 10t.288.713T7 11m0-3q.425 0 .713-.288T8 7t-.288-.712T7 6t-.712.288T6 7t.288.713T7 8m3 6h5v-2h-5zm0-3h8V9h-8zm0-3h8V6h-8zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6z"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesOffIcon],svg[material-symbols-speaker-notes-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.3L15.15 18H6l-4 4V4.5h2.5L11 11H8.2L.7 3.5l1.4-1.4l19.8 19.8zm.2-5.45L13.85 11H18V9h-6.15l-1-1H18V6h-8v1.15L4.85 2H20q.825 0 1.413.588T22 4v12q0 .65-.363 1.138t-.937.712M7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-3q.425 0 .713-.288T8 10t-.288-.712T7 9t-.712.288T6 10t.288.713T7 11"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesOffOutlineIcon],svg[material-symbols-speaker-notes-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q-.425 0-.712-.288T6 13t.288-.712T7 12t.713.288T8 13t-.288.713T7 14m13.7 3.85L18.85 16H20V4H6.85l-2-2H20q.825 0 1.413.588T22 4v12q0 .65-.363 1.138t-.937.712M13.85 11l-2-2H18v2zm6.65 12.3L15.15 18H6l-4 4V4.8L.7 3.5l1.4-1.4l19.8 19.8zM7 11q-.425 0-.712-.288T6 10t.288-.712T7 9t.713.288T8 10t-.288.713T7 11m3.85-3L10 7.15V6h8v2zM4 6.8v10.325L5.15 16h8.05z"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesOffOutlineRoundedIcon],svg[material-symbols-speaker-notes-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q-.425 0-.712-.288T6 13t.288-.712T7 12t.713.288T8 13t-.288.713T7 14M22 4v12.45q0 .425-.288.713T21 17.45q-.375 0-.687-.25T20 16.45V4H7.275q-.5 0-.75-.312T6.275 3t.25-.687t.75-.313H20q.825 0 1.413.588T22 4m-5 7h-2.725q-.5 0-.75-.312t-.25-.688t.25-.687t.75-.313H17q.425 0 .713.288T18 10t-.288.713T17 11M6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4.8l-.6-.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l18.4 18.4q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275L15.15 18zm1-7q-.425 0-.712-.288T6 10t.288-.712T7 9t.713.288T8 10t-.288.713T7 11m10-3h-6q-.425 0-.712-.288T10 7t.288-.712T11 6h6q.425 0 .713.288T18 7t-.288.713T17 8M4 6.8v10.325L5.15 16h8.05z"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesOffOutlineSharpIcon],svg[material-symbols-speaker-notes-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q-.425 0-.712-.288T6 13t.288-.712T7 12t.713.288T8 13t-.288.713T7 14m13.7 3.85L18.85 16H20V4H6.85l-2-2H22v15.85zM13.85 11l-2-2H18v2zm6.65 12.3L15.15 18H6l-4 4V4.8L.7 3.5l1.4-1.4l19.8 19.8zM7 11q-.425 0-.712-.288T6 10t.288-.712T7 9t.713.288T8 10t-.288.713T7 11m3.85-3L10 7.15V6h8v2zM4 6.8v10.325L5.15 16h8.05z"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesOffRoundedIcon],svg[material-symbols-speaker-notes-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4.5h2.5L11 11H8.2L1.4 4.2q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l18.4 18.4q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275L15.15 18zM22 4v12.725q0 .35-.175.575t-.45.35t-.55.088t-.525-.288L13.85 11H17q.425 0 .713-.288T18 10t-.288-.712T17 9h-5.15l-1-1H17q.425 0 .713-.288T18 7t-.288-.712T17 6h-6q-.425 0-.712.288T10 7v.15L6.55 3.7q-.25-.25-.287-.525t.087-.55t.35-.45T7.275 2H20q.825 0 1.413.587T22 4M7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-3q.425 0 .713-.288T8 10t-.288-.712T7 9t-.712.288T6 10t.288.713T7 11"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesOffSharpIcon],svg[material-symbols-speaker-notes-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.3L15.15 18H6l-4 4V4.5h2.5L11 11H8.2L.7 3.5l1.4-1.4l19.8 19.8zm.2-5.45L13.85 11H18V9h-6.15l-1-1H18V6h-8v1.15L4.85 2H22v15.85zM7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-3q.425 0 .713-.288T8 10t-.288-.712T7 9t-.712.288T6 10t.288.713T7 11"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesOutlineIcon],svg[material-symbols-speaker-notes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-3q.425 0 .713-.288T8 10t-.288-.712T7 9t-.712.288T6 10t.288.713T7 11m0-3q.425 0 .713-.288T8 7t-.288-.712T7 6t-.712.288T6 7t.288.713T7 8m3 6h5v-2h-5zm0-3h8V9h-8zm0-3h8V6h-8zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zm3.15-6H20V4H4v13.125zM4 16V4z"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesOutlineRoundedIcon],svg[material-symbols-speaker-notes-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-3q.425 0 .713-.288T8 10t-.288-.712T7 9t-.712.288T6 10t.288.713T7 11m0-3q.425 0 .713-.288T8 7t-.288-.712T7 6t-.712.288T6 7t.288.713T7 8m4 6h3q.425 0 .713-.288T15 13t-.288-.712T14 12h-3q-.425 0-.712.288T10 13t.288.713T11 14m0-3h6q.425 0 .713-.288T18 10t-.288-.712T17 9h-6q-.425 0-.712.288T10 10t.288.713T11 11m0-3h6q.425 0 .713-.288T18 7t-.288-.712T17 6h-6q-.425 0-.712.288T10 7t.288.713T11 8M6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-.85-2H20V4H4v13.125zM4 16V4z"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesOutlineSharpIcon],svg[material-symbols-speaker-notes-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-3q.425 0 .713-.288T8 10t-.288-.712T7 9t-.712.288T6 10t.288.713T7 11m0-3q.425 0 .713-.288T8 7t-.288-.712T7 6t-.712.288T6 7t.288.713T7 8m3 6h5v-2h-5zm0-3h8V9h-8zm0-3h8V6h-8zM2 22V2h20v16H6zm3.15-6H20V4H4v13.125zM4 16V4z"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesRoundedIcon],svg[material-symbols-speaker-notes-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-3q.425 0 .713-.288T8 10t-.288-.712T7 9t-.712.288T6 10t.288.713T7 11m0-3q.425 0 .713-.288T8 7t-.288-.712T7 6t-.712.288T6 7t.288.713T7 8m4 6h3q.425 0 .713-.288T15 13t-.288-.712T14 12h-3q-.425 0-.712.288T10 13t.288.713T11 14m0-3h6q.425 0 .713-.288T18 10t-.288-.712T17 9h-6q-.425 0-.712.288T10 10t.288.713T11 11m0-3h6q.425 0 .713-.288T18 7t-.288-.712T17 6h-6q-.425 0-.712.288T10 7t.288.713T11 8M6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18z"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerNotesSharpIcon],svg[material-symbols-speaker-notes-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14q.425 0 .713-.288T8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14m0-3q.425 0 .713-.288T8 10t-.288-.712T7 9t-.712.288T6 10t.288.713T7 11m0-3q.425 0 .713-.288T8 7t-.288-.712T7 6t-.712.288T6 7t.288.713T7 8m3 6h5v-2h-5zm0-3h8V9h-8zm0-3h8V6h-8zM2 22V2h20v16H6z"></svg:path>`,
})
export class MaterialSymbolsSpeakerNotesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerOutlineIcon],svg[material-symbols-speaker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22H7q-.825 0-1.412-.587T5 20V4q0-.825.588-1.412T7 2h10q.825 0 1.413.588T19 4v16q0 .825-.587 1.413T17 22m0-2V4H7v16zM12 9q.825 0 1.413-.587T14 7t-.587-1.412T12 5t-1.412.588T10 7t.588 1.413T12 9m0 10q1.65 0 2.825-1.175T16 15t-1.175-2.825T12 11t-2.825 1.175T8 15t1.175 2.825T12 19m0-2q-.825 0-1.412-.587T10 15t.588-1.412T12 13t1.413.588T14 15t-.587 1.413T12 17M7 4v16z"></svg:path>`,
})
export class MaterialSymbolsSpeakerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerOutlineSharpIcon],svg[material-symbols-speaker-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5V2h14zm-2-2V4H7v16zM12 9q.825 0 1.413-.587T14 7t-.587-1.412T12 5t-1.412.588T10 7t.588 1.413T12 9m0 10q1.65 0 2.825-1.175T16 15t-1.175-2.825T12 11t-2.825 1.175T8 15t1.175 2.825T12 19m0-2q-.825 0-1.412-.587T10 15t.588-1.412T12 13t1.413.588T14 15t-.587 1.413T12 17M7 4v16z"></svg:path>`,
})
export class MaterialSymbolsSpeakerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerPhoneIcon],svg[material-symbols-speaker-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.45 8.5L7 7.05q1.025-.975 2.313-1.513T12 5t2.688.538T17 7.05L15.55 8.5q-.725-.725-1.625-1.112T12 7t-1.925.388T8.45 8.5m-2.8-2.9l-1.4-1.4q1.575-1.55 3.563-2.375T12 1t4.188.825T19.75 4.2l-1.4 1.4q-1.275-1.25-2.925-1.925T12 3t-3.425.675T5.65 5.6M10 22q-.825 0-1.412-.587T8 20v-8q0-.825.588-1.412T10 10h4q.825 0 1.413.588T16 12v8q0 .825-.587 1.413T14 22z"></svg:path>`,
})
export class MaterialSymbolsSpeakerPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerPhoneOutlineIcon],svg[material-symbols-speaker-phone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.45 8.5L7 7.05q1.025-.975 2.313-1.513T12 5t2.688.538T17 7.05L15.55 8.5q-.725-.725-1.625-1.112T12 7t-1.925.388T8.45 8.5m-2.8-2.9l-1.4-1.4q1.575-1.55 3.563-2.375T12 1t4.188.825T19.75 4.2l-1.4 1.4q-1.275-1.25-2.925-1.925T12 3t-3.425.675T5.65 5.6M10 22q-.825 0-1.412-.587T8 20v-8q0-.825.588-1.412T10 10h4q.825 0 1.413.588T16 12v8q0 .825-.587 1.413T14 22zm4-2v-8h-4v8zm0 0h-4z"></svg:path>`,
})
export class MaterialSymbolsSpeakerPhoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerPhoneOutlineRoundedIcon],svg[material-symbols-speaker-phone-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7q-.75 0-1.45.225t-1.325.65q-.35.25-.775.225t-.725-.325t-.3-.713t.35-.662q.925-.675 2-1.038T12 5t2.225.362t2 1.038q.35.25.35.662t-.3.713t-.725.325t-.775-.225q-.625-.425-1.312-.65T12 7m0-4q-1.525 0-2.962.5T6.4 4.95q-.35.275-.75.263t-.7-.313t-.275-.712t.35-.688q1.5-1.2 3.275-1.85T12 1t3.7.65t3.275 1.85q.325.275.35.688t-.275.712t-.7.313t-.75-.263Q16.4 4 14.963 3.5T12 3m-2 19q-.825 0-1.412-.587T8 20v-8q0-.825.588-1.412T10 10h4q.825 0 1.413.588T16 12v8q0 .825-.587 1.413T14 22zm4-2v-8h-4v8zm0 0h-4z"></svg:path>`,
})
export class MaterialSymbolsSpeakerPhoneOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerPhoneOutlineSharpIcon],svg[material-symbols-speaker-phone-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.45 8.5L7 7.05q1.025-.975 2.313-1.513T12 5t2.688.538T17 7.05L15.55 8.5q-.725-.725-1.625-1.112T12 7t-1.925.388T8.45 8.5m-2.8-2.9l-1.4-1.4q1.575-1.55 3.563-2.375T12 1t4.188.825T19.75 4.2l-1.4 1.4q-1.275-1.25-2.925-1.925T12 3t-3.425.675T5.65 5.6M8 22V10h8v12zm6-2v-8h-4v8zm0 0h-4z"></svg:path>`,
})
export class MaterialSymbolsSpeakerPhoneOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerPhoneRoundedIcon],svg[material-symbols-speaker-phone-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7q-.75 0-1.45.225t-1.325.65q-.35.25-.775.225t-.725-.325t-.3-.713t.35-.662q.925-.675 2-1.038T12 5t2.225.362t2 1.038q.35.25.35.662t-.3.713t-.725.325t-.775-.225q-.625-.425-1.312-.65T12 7m0-4q-1.525 0-2.962.5T6.4 4.95q-.35.275-.75.263t-.7-.313t-.275-.712t.35-.688q1.5-1.2 3.275-1.85T12 1t3.7.65t3.275 1.85q.325.275.35.688t-.275.712t-.7.313t-.75-.263Q16.4 4 14.963 3.5T12 3m-2 19q-.825 0-1.412-.587T8 20v-8q0-.825.588-1.412T10 10h4q.825 0 1.413.588T16 12v8q0 .825-.587 1.413T14 22z"></svg:path>`,
})
export class MaterialSymbolsSpeakerPhoneRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerPhoneSharpIcon],svg[material-symbols-speaker-phone-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.45 8.5L7 7.05q1.025-.975 2.313-1.513T12 5t2.688.538T17 7.05L15.55 8.5q-.725-.725-1.625-1.112T12 7t-1.925.388T8.45 8.5m-2.8-2.9l-1.4-1.4q1.575-1.55 3.563-2.375T12 1t4.188.825T19.75 4.2l-1.4 1.4q-1.275-1.25-2.925-1.925T12 3t-3.425.675T5.65 5.6M8 22V10h8v12z"></svg:path>`,
})
export class MaterialSymbolsSpeakerPhoneSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeakerSharpIcon],svg[material-symbols-speaker-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 22H5V2h14zM12 9q.825 0 1.413-.587T14 7t-.587-1.412T12 5t-1.412.588T10 7t.588 1.413T12 9m0 10q1.65 0 2.825-1.175T16 15t-1.175-2.825T12 11t-2.825 1.175T8 15t1.175 2.825T12 19m0-2q-.825 0-1.412-.587T10 15t.588-1.412T12 13t1.413.588T14 15t-.587 1.413T12 17"></svg:path>`,
})
export class MaterialSymbolsSpeakerSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpecialCharacterIcon],svg[material-symbols-special-character-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-3h5q-2.1-1.125-3.3-3.125T3.5 10.5q0-3.55 2.475-6.025T12 2t6.025 2.475T20.5 10.5q0 2.375-1.2 4.375T16 18h5v3h-8v-5.1q1.95-.35 3.225-1.875T17.5 10.5q0-2.3-1.6-3.9T12 5T8.1 6.6t-1.6 3.9q0 2 1.275 3.525T11 15.9V21z"></svg:path>`,
})
export class MaterialSymbolsSpecialCharacterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpecialCharacterRoundedIcon],svg[material-symbols-special-character-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5Q9.7 5 8.1 6.6t-1.6 3.9q0 1.575.825 2.9t2.25 2.025q.6.3 1.013.813T11 17.4v2.1q0 .625-.437 1.063T9.5 21h-5q-.625 0-1.062-.437T3 19.5t.438-1.062T4.5 18H8q-2.1-1.125-3.3-3.125T3.5 10.5q0-3.55 2.475-6.025T12 2t6.025 2.475T20.5 10.5q0 2.375-1.2 4.375T16 18h3.5q.625 0 1.063.438T21 19.5t-.437 1.063T19.5 21h-5q-.625 0-1.062-.437T13 19.5v-2.1q0-.65.413-1.162t1.012-.813q1.425-.7 2.25-2.025t.825-2.9q0-2.3-1.6-3.9T12 5"></svg:path>`,
})
export class MaterialSymbolsSpecialCharacterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpecificGravityIcon],svg[material-symbols-specific-gravity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q-.775 0-1.35-.5T5 20.225L3 2h18l-2 18.225q-.075.775-.65 1.275T17 22zM5.675 8H9.35q.525-.475 1.2-.737T12 7t1.45.263t1.2.737h3.675l.425-4H5.225zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13"></svg:path>`,
})
export class MaterialSymbolsSpecificGravityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpecificGravityOutlineIcon],svg[material-symbols-specific-gravity-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q-.775 0-1.35-.5T5 20.225L3 2h18l-2 18.225q-.075.775-.65 1.275T17 22zM5.675 8H9.35q.525-.475 1.2-.737T12 7t1.45.263t1.2.737h3.675l.425-4H5.225zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13m-6.1-3L7 20h10l1.1-10h-2.225q.05.25.088.488T16 11q0 1.65-1.175 2.825T12 15t-2.825-1.175T8 11q0-.275.038-.513T8.124 10zM7 20h1.125H8h8h-.125H17z"></svg:path>`,
})
export class MaterialSymbolsSpecificGravityOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpecificGravityOutlineRoundedIcon],svg[material-symbols-specific-gravity-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q-.775 0-1.35-.5T5 20.225L3.125 3.1q-.05-.45.25-.775T4.125 2h15.75q.45 0 .75.325t.25.775L19 20.225q-.075.775-.65 1.275T17 22zM5.675 8H9.35q.525-.475 1.2-.737T12 7t1.45.263t1.2.737h3.675l.425-4H5.225zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13m-6.1-3L7 20h10l1.1-10h-2.225q.05.25.088.488T16 11q0 1.65-1.175 2.825T12 15t-2.825-1.175T8 11q0-.275.038-.513T8.124 10zM7 20h1.125H8h8h-.125H17z"></svg:path>`,
})
export class MaterialSymbolsSpecificGravityOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpecificGravityOutlineSharpIcon],svg[material-symbols-specific-gravity-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.2 22L3 2h18l-2.2 20zm.475-14H9.35q.525-.475 1.2-.737T12 7t1.45.263t1.2.737h3.675l.425-4H5.225zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13m-6.1-3L7 20h10l1.1-10h-2.225q.05.25.088.488T16 11q0 1.65-1.175 2.825T12 15t-2.825-1.175T8 11q0-.275.038-.513T8.124 10zM7 20h1.125H8h8h-.125H17z"></svg:path>`,
})
export class MaterialSymbolsSpecificGravityOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpecificGravityRoundedIcon],svg[material-symbols-specific-gravity-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q-.775 0-1.35-.5T5 20.225L3.125 3.1q-.05-.45.25-.775T4.125 2h15.75q.45 0 .75.325t.25.775L19 20.225q-.075.775-.65 1.275T17 22zM5.675 8H9.35q.525-.475 1.2-.737T12 7t1.45.263t1.2.737h3.675l.425-4H5.225zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13"></svg:path>`,
})
export class MaterialSymbolsSpecificGravityRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpecificGravitySharpIcon],svg[material-symbols-specific-gravity-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.2 22L3 2h18l-2.2 20zm.475-14H9.35q.525-.475 1.2-.737T12 7t1.45.263t1.2.737h3.675l.425-4H5.225zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13"></svg:path>`,
})
export class MaterialSymbolsSpecificGravitySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeechToTextIcon],svg[material-symbols-speech-to-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10q-.825 0-1.412-.575T15 8V4q0-.85.588-1.425T17 2q.85 0 1.425.575T19 4v4q0 .85-.575 1.425T17 10M5 22q-.825 0-1.412-.587T3 20V4q0-.825.588-1.412T5 2h8v2H5v16h11v-2h2v2q0 .825-.587 1.413T16 22zm2-4v-2h7v2zm0-3v-2h5v2zm11 1h-2v-2.6q-1.925-.35-3.213-1.862T11.5 8h2q0 1.45 1.025 2.475T17 11.5q1.475 0 2.488-1.025T20.5 8h2q0 2.025-1.275 3.538T18 13.4z"></svg:path>`,
})
export class MaterialSymbolsSpeechToTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeechToTextRoundedIcon],svg[material-symbols-speech-to-text-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10q-.825 0-1.412-.575T15 8V4q0-.85.588-1.425T17 2q.85 0 1.425.575T19 4v4q0 .85-.575 1.425T17 10M5 22q-.825 0-1.412-.587T3 20V4q0-.825.588-1.412T5 2h7q.425 0 .713.288T13 3t-.288.713T12 4H5v16h11v-1q0-.425.288-.712T17 18t.713.288T18 19v1q0 .825-.587 1.413T16 22zm8-4H8q-.425 0-.712-.288T7 17t.288-.712T8 16h5q.425 0 .713.288T14 17t-.288.713T13 18m-2-3H8q-.425 0-.712-.288T7 14t.288-.712T8 13h3q.425 0 .713.288T12 14t-.288.713T11 15m6-3.5q1.2 0 2.1-.687t1.25-1.763q.125-.425.425-.737T21.5 8t.713.338t.187.762q-.35 1.65-1.537 2.825T18 13.4V15q0 .425-.288.713T17 16t-.712-.288T16 15v-1.6q-1.65-.3-2.85-1.475T11.6 9.1q-.1-.425.188-.762T12.5 8t.725.313t.425.737q.35 1.075 1.263 1.763T17 11.5"></svg:path>`,
})
export class MaterialSymbolsSpeechToTextRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeechToTextSharpIcon],svg[material-symbols-speech-to-text-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10q-.825 0-1.412-.575T15 8V4q0-.85.588-1.425T17 2q.85 0 1.425.575T19 4v4q0 .85-.575 1.425T17 10M3 22V2h10v2H5v16h11v-2h2v4zm4-4v-2h7v2zm0-3v-2h5v2zm11 1h-2v-2.6q-1.925-.35-3.213-1.862T11.5 8h2q0 1.45 1.025 2.475T17 11.5q1.475 0 2.488-1.025T20.5 8h2q0 2.025-1.275 3.538T18 13.4z"></svg:path>`,
})
export class MaterialSymbolsSpeechToTextSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeedIcon],svg[material-symbols-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.45 15.5q.625.625 1.575.588T13.4 15.4L19 7l-8.4 5.6q-.65.45-.712 1.362t.562 1.538M5.1 20q-.55 0-1.012-.238t-.738-.712q-.65-1.175-1-2.437T2 14q0-2.075.788-3.9t2.137-3.175T8.1 4.788T12 4q2.05 0 3.85.775T19 6.888t2.15 3.125t.825 3.837q.025 1.375-.312 2.688t-1.038 2.512q-.275.475-.737.713T18.874 20z"></svg:path>`,
})
export class MaterialSymbolsSpeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed025Icon],svg[material-symbols-speed-0-25-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17v-2h2v2zm10 0v-2h4v-2h-4V7h6v2h-4v2h2q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17zm-7 0v-4q0-.825.588-1.412T9 11h2V9H7V7h4q.825 0 1.413.588T13 9v2q0 .825-.587 1.413T11 13H9v2h4v2z"></svg:path>`,
})
export class MaterialSymbolsSpeed025Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed025RoundedIcon],svg[material-symbols-speed-0-25-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17q-.425 0-.712-.288T14 16t.288-.712T15 15h3v-2h-3q-.425 0-.712-.288T14 12V8q0-.425.288-.712T15 7h4q.425 0 .713.288T20 8t-.288.713T19 9h-3v2h2q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17zm-3 0H8q-.425 0-.712-.288T7 16v-3q0-.825.588-1.412T9 11h2V9H8q-.425 0-.712-.288T7 8t.288-.712T8 7h3q.825 0 1.413.588T13 9v2q0 .825-.587 1.413T11 13H9v2h3q.425 0 .713.288T13 16t-.288.713T12 17m-7 0q-.425 0-.712-.288T4 16t.288-.712T5 15t.713.288T6 16t-.288.713T5 17"></svg:path>`,
})
export class MaterialSymbolsSpeed025RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed025SharpIcon],svg[material-symbols-speed-0-25-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17v-2h2v2zm10 0v-2h4v-2h-4V7h6v2h-4v2h4v6zm-7 0v-6h4V9H7V7h6v6H9v2h4v2z"></svg:path>`,
})
export class MaterialSymbolsSpeed025SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed02xIcon],svg[material-symbols-speed-0-2x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17v-2h2v2zm3 0v-4q0-.825.588-1.412T8 11h2V9H6V7h4q.825 0 1.413.588T12 9v2q0 .825-.587 1.413T10 13H8v2h4v2zm7 0l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed02xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed02xRoundedIcon],svg[material-symbols-speed-0-2x-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17H7q-.425 0-.712-.288T6 16v-3q0-.825.588-1.412T8 11h2V9H7q-.425 0-.712-.288T6 8t.288-.712T7 7h3q.825 0 1.413.588T12 9v2q0 .825-.587 1.413T10 13H8v2h3q.425 0 .713.288T12 16t-.288.713T11 17m6-3.325l-1.75 2.9q-.125.2-.312.313t-.413.112q-.5 0-.763-.437t.013-.863L16 12l-2.225-3.7q-.275-.425-.012-.862T14.525 7q.225 0 .413.113t.312.312l1.75 2.9l1.75-2.9q.125-.2.313-.312T19.475 7q.5 0 .763.438t-.013.862L18 12l2.225 3.7q.275.425.013.863t-.763.437q-.225 0-.413-.112t-.312-.313zM4 17q-.425 0-.712-.288T3 16t.288-.712T4 15t.713.288T5 16t-.288.713T4 17"></svg:path>`,
})
export class MaterialSymbolsSpeed02xRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed02xSharpIcon],svg[material-symbols-speed-0-2x-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17v-2h2v2zm3 0v-6h4V9H6V7h6v6H8v2h4v2zm7 0l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed02xSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed05Icon],svg[material-symbols-speed-0-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v-2h2v2zm3 0v-2h4v-2h-4V7h6v2h-4v2h2q.825 0 1.413.588T16 13v2q0 .825-.587 1.413T14 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed05RoundedIcon],svg[material-symbols-speed-0-5-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17q-.425 0-.712-.288T10 16t.288-.712T11 15h3v-2h-3q-.425 0-.712-.288T10 12V8q0-.425.288-.712T11 7h4q.425 0 .713.288T16 8t-.288.713T15 9h-3v2h2q.825 0 1.413.588T16 13v2q0 .825-.587 1.413T14 17zm-3 0q-.425 0-.712-.288T7 16t.288-.712T8 15t.713.288T9 16t-.288.713T8 17"></svg:path>`,
})
export class MaterialSymbolsSpeed05RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed05SharpIcon],svg[material-symbols-speed-0-5-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v-2h2v2zm3 0v-2h4v-2h-4V7h6v2h-4v2h4v6z"></svg:path>`,
})
export class MaterialSymbolsSpeed05SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed05xIcon],svg[material-symbols-speed-0-5x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17v-2h2v2zm10 0l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17zm-7 0v-2h4v-2H6V7h6v2H8v2h2q.825 0 1.413.588T12 13v2q0 .825-.587 1.413T10 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed05xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed05xRoundedIcon],svg[material-symbols-speed-0-5x-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 13.675l-1.75 2.9q-.125.2-.312.313t-.413.112q-.5 0-.763-.437t.013-.863L16 12l-2.225-3.7q-.275-.425-.012-.862T14.525 7q.225 0 .413.113t.312.312l1.75 2.9l1.75-2.9q.125-.2.313-.312T19.475 7q.5 0 .763.438t-.013.862L18 12l2.225 3.7q.275.425.013.863t-.763.437q-.225 0-.413-.112t-.312-.313zM10 17H7q-.425 0-.712-.288T6 16t.288-.712T7 15h3v-2H7q-.425 0-.712-.288T6 12V8q0-.425.288-.712T7 7h4q.425 0 .713.288T12 8t-.288.713T11 9H8v2h2q.825 0 1.413.588T12 13v2q0 .825-.587 1.413T10 17m-6 0q-.425 0-.712-.288T3 16t.288-.712T4 15t.713.288T5 16t-.288.713T4 17"></svg:path>`,
})
export class MaterialSymbolsSpeed05xRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed05xSharpIcon],svg[material-symbols-speed-0-5x-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17v-2h2v2zm10 0l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17zm-7 0v-2h4v-2H6V7h6v2H8v2h4v6z"></svg:path>`,
})
export class MaterialSymbolsSpeed05xSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed075Icon],svg[material-symbols-speed-0-75-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17v-2h2v2zm9 0v-2h4v-2h-4V7h6v2h-4v2h2q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17zm-5 0l2-8H7V7h4.25q.725 0 1.238.538T13 8.8l-.05.45L11 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed075Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed075RoundedIcon],svg[material-symbols-speed-0-75-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17q-.425 0-.712-.288T14 16t.288-.712T15 15h3v-2h-3q-.425 0-.712-.288T14 12V8q0-.425.288-.712T15 7h4q.425 0 .713.288T20 8t-.288.713T19 9h-3v2h2q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17zm-4-8H8q-.425 0-.712-.288T7 8t.288-.712T8 7h3.25q.725 0 1.238.538T13 8.8l-.05.45l-1.775 7.025q-.075.325-.325.525t-.6.2q-.475 0-.775-.375T9.3 15.8zm-5 8q-.425 0-.712-.288T5 16t.288-.712T6 15t.713.288T7 16t-.288.713T6 17"></svg:path>`,
})
export class MaterialSymbolsSpeed075RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed075SharpIcon],svg[material-symbols-speed-0-75-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17v-2h2v2zm9 0v-2h4v-2h-4V7h6v2h-4v2h4v6zm-5 0l2-8H7V7h6v1.8L11 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed075SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed07xIcon],svg[material-symbols-speed-0-7x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 17l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17zm-9 0v-2h2v2zm4 0l2-8H6V7h4.25q.725 0 1.238.538T12 8.8l-.05.45L10 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed07xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed07xRoundedIcon],svg[material-symbols-speed-0-7x-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 13.675l-1.75 2.9q-.125.2-.312.313t-.413.112q-.5 0-.763-.437t.013-.863L16 12l-2.225-3.7q-.275-.425-.012-.862T14.525 7q.225 0 .413.113t.312.312l1.75 2.9l1.75-2.9q.125-.2.313-.312T19.475 7q.5 0 .763.438t-.013.862L18 12l2.225 3.7q.275.425.013.863t-.763.437q-.225 0-.413-.112t-.312-.313zM9.25 17q-.475 0-.775-.375T8.3 15.8L10 9H7q-.425 0-.712-.288T6 8t.288-.712T7 7h3.25q.725 0 1.238.538T12 8.8l-.05.45l-1.775 7.025q-.075.325-.325.525t-.6.2M5 17q-.425 0-.712-.288T4 16t.288-.712T5 15t.713.288T6 16t-.288.713T5 17"></svg:path>`,
})
export class MaterialSymbolsSpeed07xRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed07xSharpIcon],svg[material-symbols-speed-0-7x-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 17l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17zm-9 0v-2h2v2zm4 0l2-8H6V7h6v2.05L10 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed07xSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed12Icon],svg[material-symbols-speed-1-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17V9H5V7h4v10zm3 0v-2h2v2zm3 0h6v-2h-4v-2h2q.825 0 1.413-.587T19 11V9q0-.825-.587-1.412T17 7h-4v2h4v2h-2q-.825 0-1.412.588T13 13z"></svg:path>`,
})
export class MaterialSymbolsSpeed12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed12RoundedIcon],svg[material-symbols-speed-1-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17q-.425 0-.712-.288T7 16V9H6q-.425 0-.712-.288T5 8t.288-.712T6 7h1q.825 0 1.413.588T9 9v7q0 .425-.288.713T8 17m7 0q-.825 0-1.412-.587T13 15v-2q0-.825.588-1.412T15 11h2V9h-3q-.425 0-.712-.288T13 8t.288-.712T14 7h3q.825 0 1.413.588T19 9v2q0 .825-.587 1.413T17 13h-2v2h3q.425 0 .713.288T19 16t-.288.713T18 17zm-4 0q-.425 0-.712-.288T10 16t.288-.712T11 15t.713.288T12 16t-.288.713T11 17"></svg:path>`,
})
export class MaterialSymbolsSpeed12RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed12SharpIcon],svg[material-symbols-speed-1-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17V9H5V7h4v10zm3 0v-2h2v2zm3 0v-6h4V9h-4V7h6v6h-4v2h4v2z"></svg:path>`,
})
export class MaterialSymbolsSpeed12SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed125Icon],svg[material-symbols-speed-1-25-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17v-2h2v2zm10 0v-2h4v-2h-4V7h6v2h-4v2h2q.825 0 1.413.588T22.5 13v2q0 .825-.587 1.413T20.5 17zm-7 0v-4q0-.825.588-1.412T11.5 11h2V9h-4V7h4q.825 0 1.413.588T15.5 9v2q0 .825-.587 1.413T13.5 13h-2v2h4v2zm-6 0V9h-2V7h4v10z"></svg:path>`,
})
export class MaterialSymbolsSpeed125Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed125RoundedIcon],svg[material-symbols-speed-1-25-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 17q-.425 0-.712-.288T16.5 16t.288-.712T17.5 15h3v-2h-3q-.425 0-.712-.288T16.5 12V8q0-.425.288-.712T17.5 7h4q.425 0 .713.288T22.5 8t-.288.713T21.5 9h-3v2h2q.825 0 1.413.588T22.5 13v2q0 .825-.587 1.413T20.5 17zm-3 0h-4q-.425 0-.712-.288T9.5 16v-3q0-.825.588-1.412T11.5 11h2V9h-3q-.425 0-.712-.288T9.5 8t.288-.712T10.5 7h3q.825 0 1.413.588T15.5 9v2q0 .825-.587 1.413T13.5 13h-2v2h3q.425 0 .713.288T15.5 16t-.288.713T14.5 17m-7 0q-.425 0-.712-.288T6.5 16t.288-.712T7.5 15t.713.288T8.5 16t-.288.713T7.5 17m-4-8h-1q-.425 0-.712-.288T1.5 8t.288-.712T2.5 7h2q.425 0 .713.288T5.5 8v8q0 .425-.288.713T4.5 17t-.712-.288T3.5 16z"></svg:path>`,
})
export class MaterialSymbolsSpeed125RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed125SharpIcon],svg[material-symbols-speed-1-25-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17v-2h2v2zm10 0v-2h4v-2h-4V7h6v2h-4v2h4v6zm-7 0v-6h4V9h-4V7h6v6h-4v2h4v2zm-6 0V9h-2V7h4v10z"></svg:path>`,
})
export class MaterialSymbolsSpeed125SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed12xIcon],svg[material-symbols-speed-1-2x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-2h2v2zm3 0v-4q0-.825.588-1.412T11 11h1.5V9H9V7h3.5q.825 0 1.413.588T14.5 9v2q0 .825-.587 1.413T12.5 13H11v2h3.5v2zm-6 0V9H1V7h4v10zm12.5 0l3-5l-3-5h2l2 3.325L21.5 7h2l-3 5l3 5h-2l-2-3.325l-2 3.325z"></svg:path>`,
})
export class MaterialSymbolsSpeed12xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed12xRoundedIcon],svg[material-symbols-speed-1-2x-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 17H10q-.425 0-.712-.288T9 16v-3q0-.825.588-1.412T11 11h1.5V9H10q-.425 0-.712-.288T9 8t.288-.712T10 7h2.5q.825 0 1.413.588T14.5 9v2q0 .825-.587 1.413T12.5 13H11v2h2.5q.425 0 .713.288T14.5 16t-.288.713T13.5 17M3 9H2q-.425 0-.712-.288T1 8t.288-.712T2 7h2q.425 0 .713.288T5 8v8q0 .425-.288.713T4 17t-.712-.288T3 16zm16.5 4.675l-1.75 2.9q-.125.2-.312.313t-.413.112q-.5 0-.762-.437t.012-.863L18.5 12l-2.225-3.7q-.275-.425-.012-.862T17.025 7q.225 0 .413.113t.312.312l1.75 2.9l1.75-2.9q.125-.2.313-.312T21.975 7q.5 0 .763.438t-.013.862L20.5 12l2.225 3.7q.275.425.013.863t-.763.437q-.225 0-.413-.112t-.312-.313zM7 17q-.425 0-.712-.288T6 16t.288-.712T7 15t.713.288T8 16t-.288.713T7 17"></svg:path>`,
})
export class MaterialSymbolsSpeed12xRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed12xSharpIcon],svg[material-symbols-speed-1-2x-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-2h2v2zm3 0v-6h3.5V9H9V7h5.5v6H11v2h3.5v2zm-6 0V9H1V7h4v10zm12.5 0l3-5l-3-5h2l2 3.325L21.5 7h2l-3 5l3 5h-2l-2-3.325l-2 3.325z"></svg:path>`,
})
export class MaterialSymbolsSpeed12xSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed15Icon],svg[material-symbols-speed-1-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17V9H5V7h4v10zm3 0v-2h2v2zm3 0v-2h4v-2h-4V7h6v2h-4v2h2q.825 0 1.413.588T19 13v2q0 .825-.587 1.413T17 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed15RoundedIcon],svg[material-symbols-speed-1-5-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17q-.425 0-.712-.288T7 16V9H6q-.425 0-.712-.288T5 8t.288-.712T6 7h1q.825 0 1.413.588T9 9v7q0 .425-.288.713T8 17m6 0q-.425 0-.712-.288T13 16t.288-.712T14 15h3v-2h-2q-.825 0-1.412-.587T13 11V9q0-.825.588-1.412T15 7h3q.425 0 .713.288T19 8t-.288.713T18 9h-3v2h2q.825 0 1.413.588T19 13v2q0 .825-.587 1.413T17 17zm-3 0q-.425 0-.712-.288T10 16t.288-.712T11 15t.713.288T12 16t-.288.713T11 17"></svg:path>`,
})
export class MaterialSymbolsSpeed15RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed15SharpIcon],svg[material-symbols-speed-1-5-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17V9H5V7h4v10zm3 0v-2h2v2zm3 0v-2h4v-2h-4V7h6v2h-4v2h4v6z"></svg:path>`,
})
export class MaterialSymbolsSpeed15SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed15xIcon],svg[material-symbols-speed-1-5x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-2h2v2zm-3 0V9H1V7h4v10zm12.5 0l3-5l-3-5h2l2 3.325L21.5 7h2l-3 5l3 5h-2l-2-3.325l-2 3.325zM9 17v-2h3.5v-2H9V7h5.5v2H11v2h1.5q.825 0 1.413.588T14.5 13v2q0 .825-.587 1.413T12.5 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed15xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed15xRoundedIcon],svg[material-symbols-speed-1-5x-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9H2q-.425 0-.712-.288T1 8t.288-.712T2 7h2q.425 0 .713.288T5 8v8q0 .425-.288.713T4 17t-.712-.288T3 16zm16.5 4.675l-1.75 2.9q-.125.2-.312.313t-.413.112q-.5 0-.762-.437t.012-.863L18.5 12l-2.225-3.7q-.275-.425-.012-.862T17.025 7q.225 0 .413.113t.312.312l1.75 2.9l1.75-2.9q.125-.2.313-.312T21.975 7q.5 0 .763.438t-.013.862L20.5 12l2.225 3.7q.275.425.013.863t-.763.437q-.225 0-.413-.112t-.312-.313zM12.5 17H10q-.425 0-.712-.288T9 16t.288-.712T10 15h2.5v-2H10q-.425 0-.712-.288T9 12V8q0-.425.288-.712T10 7h3.5q.425 0 .713.288T14.5 8t-.288.713T13.5 9H11v2h1.5q.825 0 1.413.588T14.5 13v2q0 .825-.587 1.413T12.5 17M7 17q-.425 0-.712-.288T6 16t.288-.712T7 15t.713.288T8 16t-.288.713T7 17"></svg:path>`,
})
export class MaterialSymbolsSpeed15xRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed15xSharpIcon],svg[material-symbols-speed-1-5x-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-2h2v2zm-3 0V9H1V7h4v10zm12.5 0l3-5l-3-5h2l2 3.325L21.5 7h2l-3 5l3 5h-2l-2-3.325l-2 3.325zM9 17v-2h3.5v-2H9V7h5.5v2H11v2h3.5v6z"></svg:path>`,
})
export class MaterialSymbolsSpeed15xSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed175Icon],svg[material-symbols-speed-1-75-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v-2h2v2zm9 0v-2h4v-2h-4V7h6v2h-4v2h2q.825 0 1.413.588T22 13v2q0 .825-.587 1.413T20 17zM4 17V9H2V7h4v10zm7 0l2-8H9V7h4.25q.725 0 1.238.538T15 8.8l-.05.45L13 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed175Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed175OutlineSharpIcon],svg[material-symbols-speed-1-75-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v-2h2v2zm9 0v-2h4v-2h-4V7h6v2h-4v2h4v6zM4 17V9H2V7h4v10zm7 0l2-8H9V7h6v2.05L13 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed175OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed175RoundedIcon],svg[material-symbols-speed-1-75-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17q-.425 0-.712-.288T16 16t.288-.712T17 15h3v-2h-3q-.425 0-.712-.288T16 12V8q0-.425.288-.712T17 7h4q.425 0 .713.288T22 8t-.288.713T21 9h-3v2h2q.825 0 1.413.588T22 13v2q0 .825-.587 1.413T20 17zm-4-8h-3q-.425 0-.712-.288T9 8t.288-.712T10 7h3.25q.725 0 1.238.538T15 8.8l-.05.45l-1.775 7.025q-.075.325-.325.525t-.6.2q-.475 0-.775-.375T11.3 15.8zm-5 8q-.425 0-.712-.288T7 16t.288-.712T8 15t.713.288T9 16t-.288.713T8 17M4 9H3q-.425 0-.712-.288T2 8t.288-.712T3 7h2q.425 0 .713.288T6 8v8q0 .425-.288.713T5 17t-.712-.288T4 16z"></svg:path>`,
})
export class MaterialSymbolsSpeed175RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed175SharpIcon],svg[material-symbols-speed-1-75-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17v-2h2v2zm9 0v-2h4v-2h-4V7h6v2h-4v2h4v6zM4 17V9H2V7h4v10zm7 0l2-8H9V7h6.05v1.85L13 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed175SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed17xIcon],svg[material-symbols-speed-1-7x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-2h2v2zm-3 0V9H1V7h4v10zm12 0l3-5l-3-5h2l2 3.325L21 7h2l-3 5l3 5h-2l-2-3.325L17 17zm-5 0l2-8H8V7h4.25q.725 0 1.238.538T14 8.8l-.05.45L12 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed17xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed17xRoundedIcon],svg[material-symbols-speed-1-7x-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17q-.425 0-.712-.288T3 16V9H2q-.425 0-.712-.288T1 8t.288-.712T2 7h2q.425 0 .713.288T5 8v8q0 .425-.288.713T4 17m15-3.325l-1.75 2.9q-.125.2-.312.313t-.413.112q-.5 0-.762-.437t.012-.863L18 12l-2.225-3.7q-.275-.425-.012-.862T16.525 7q.225 0 .413.113t.312.312l1.75 2.9l1.75-2.9q.125-.2.313-.312T21.475 7q.5 0 .763.438t-.013.862L20 12l2.225 3.7q.275.425.013.863t-.763.437q-.225 0-.413-.112t-.312-.313zM11.25 17q-.475 0-.775-.375T10.3 15.8L12 9H9q-.425 0-.712-.288T8 8t.288-.712T9 7h3.25q.725 0 1.238.538T14 8.8l-.05.45l-1.775 7.025q-.075.325-.325.525t-.6.2M7 17q-.425 0-.712-.288T6 16t.288-.712T7 15t.713.288T8 16t-.288.713T7 17"></svg:path>`,
})
export class MaterialSymbolsSpeed17xRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed17xSharpIcon],svg[material-symbols-speed-1-7x-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-2h2v2zm-3 0V9H1V7h4v10zm12 0l3-5l-3-5h2l2 3.325L21 7h2l-3 5l3 5h-2l-2-3.325L17 17zm-5 0l2-8H8V7h6v2.05L12 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed17xSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed2xIcon],svg[material-symbols-speed-2x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17v-4q0-.825.588-1.412T7 11h2V9H5V7h4q.825 0 1.413.588T11 9v2q0 .825-.587 1.413T9 13H7v2h4v2zm7 0l3-5l-3-5h2l2 3.325L18 7h2l-3 5l3 5h-2l-2-3.325L14 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed2xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed2xRoundedIcon],svg[material-symbols-speed-2x-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17H7q-.825 0-1.412-.587T5 15v-2q0-.825.588-1.412T7 11h2V9H6q-.425 0-.712-.288T5 8t.288-.712T6 7h3q.825 0 1.413.588T11 9v2q0 .825-.587 1.413T9 13H7v2h3q.425 0 .713.288T11 16t-.288.713T10 17m6-3.325l-1.75 2.9q-.125.2-.312.313t-.413.112q-.5 0-.763-.437t.013-.863L15 12l-2.225-3.7q-.275-.425-.012-.862T13.525 7q.225 0 .413.113t.312.312l1.75 2.9l1.75-2.9q.125-.2.313-.312T18.475 7q.5 0 .763.438t-.013.862L17 12l2.225 3.7q.275.425.013.863t-.763.437q-.225 0-.413-.112t-.312-.313z"></svg:path>`,
})
export class MaterialSymbolsSpeed2xRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeed2xSharpIcon],svg[material-symbols-speed-2x-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17v-6h4V9H5V7h6v6H7v2h4v2zm7 0l3-5l-3-5h2l2 3.325L18 7h2l-3 5l3 5h-2l-2-3.325L14 17z"></svg:path>`,
})
export class MaterialSymbolsSpeed2xSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeedCameraIcon],svg[material-symbols-speed-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.525 15l-2.175-1.25l3.5-2.6L21 12.4zM4 20v-2h5v-5.95l-3-1.725q-.725-.425-.937-1.212T5.275 7.6l1.5-2.6q.425-.725 1.213-.937t1.512.212l9.525 5.5l-6.1 4.55l-1.925-1.1V18q0 .825-.588 1.413T9 20z"></svg:path>`,
})
export class MaterialSymbolsSpeedCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeedCameraOutlineIcon],svg[material-symbols-speed-camera-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.525 15l-2.175-1.25l3.5-2.6L21 12.4zM12.8 11.95l2.6-1.975L8.5 6L7 8.6zM4 20v-2h5v-5.95l-3-1.725q-.725-.425-.937-1.212T5.275 7.6l1.5-2.6q.425-.725 1.213-.937t1.512.212l9.525 5.5l-6.1 4.55l-1.925-1.1V18q0 .825-.588 1.413T9 20z"></svg:path>`,
})
export class MaterialSymbolsSpeedCameraOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeedCameraOutlineRoundedIcon],svg[material-symbols-speed-camera-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.95 14.675l-.925-.525q-.225-.125-.25-.4t.2-.45l2.35-1.75q.25-.2.538-.213t.562.138l.925.525q.225.125.238.4t-.188.45l-2.35 1.75q-.25.2-.537.213t-.563-.138M12.8 11.95l2.6-1.975L8.5 6L7 8.6zM5 20q-.425 0-.712-.288T4 19t.288-.712T5 18h4v-5.95l-3-1.725q-.725-.425-.937-1.212T5.275 7.6l1.5-2.6q.425-.725 1.213-.937t1.512.212L17.725 9q.475.275.5.813t-.4.862l-3.85 2.875q-.5.35-1.075.388t-1.1-.263l-.8-.45V18q0 .825-.587 1.413T9 20z"></svg:path>`,
})
export class MaterialSymbolsSpeedCameraOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeedCameraOutlineSharpIcon],svg[material-symbols-speed-camera-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.525 15l-2.175-1.25l3.5-2.6L21 12.4zM12.8 11.95l2.6-1.975L8.5 6L7 8.6zM4 20v-2h5v-5.95L4.275 9.325l3.5-6.05l11.25 6.5l-6.1 4.55l-1.925-1.1V20zm7.2-11.025"></svg:path>`,
})
export class MaterialSymbolsSpeedCameraOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeedCameraRoundedIcon],svg[material-symbols-speed-camera-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.95 14.675l-.925-.525q-.225-.125-.25-.4t.2-.45l2.35-1.75q.25-.2.538-.213t.562.138l.925.525q.225.125.238.4t-.188.45l-2.35 1.75q-.25.2-.537.213t-.563-.138M5 20q-.425 0-.712-.288T4 19t.288-.712T5 18h4v-5.95l-3-1.725q-.725-.425-.937-1.212T5.275 7.6l1.5-2.6q.425-.725 1.213-.937t1.512.212L17.725 9q.475.275.5.813t-.4.862l-3.85 2.875q-.5.35-1.075.388t-1.1-.263l-.8-.45V18q0 .825-.587 1.413T9 20z"></svg:path>`,
})
export class MaterialSymbolsSpeedCameraRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeedCameraSharpIcon],svg[material-symbols-speed-camera-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.525 15l-2.175-1.25l3.5-2.6L21 12.4zM4 20v-2h5v-5.95L4.275 9.325l3.5-6.05l11.25 6.5l-6.1 4.55l-1.925-1.1V20z"></svg:path>`,
})
export class MaterialSymbolsSpeedCameraSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeedOutlineIcon],svg[material-symbols-speed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.45 15.5q.6.6 1.55.588t1.4-.688L19 7l-8.4 5.6q-.675.45-.712 1.375t.562 1.525M12 4q1.475 0 2.838.412T17.4 5.65l-1.9 1.2q-.825-.425-1.712-.637T12 6Q8.675 6 6.337 8.338T4 14q0 1.05.288 2.075T5.1 18h13.8q.575-.95.838-1.975T20 13.9q0-.9-.213-1.75t-.637-1.65l1.2-1.9q.75 1.175 1.188 2.5T22 13.85t-.325 2.725t-1.025 2.475q-.275.45-.75.7t-1 .25H5.1q-.525 0-1-.25t-.75-.7q-.65-1.125-1-2.387T2 14q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 4m.175 7.825"></svg:path>`,
})
export class MaterialSymbolsSpeedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeedOutlineRoundedIcon],svg[material-symbols-speed-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.45 15.5q.6.6 1.55.588t1.4-.688l4.225-6.325q.225-.35-.062-.638t-.638-.062L10.6 12.6q-.675.45-.712 1.375t.562 1.525M12 4q.9 0 1.775.15t1.7.475q.4.15.85.563t.25.787t-.9.5t-1.125-.025q-.625-.225-1.262-.337T12 6Q8.675 6 6.337 8.338T4 14q0 1.05.288 2.075T5.1 18h13.8q.575-.95.838-1.975T20 13.9q0-.65-.113-1.275T19.55 11.4q-.15-.425-.05-.825t.45-.675q.325-.25.713-.15t.537.45q.375.875.575 1.788T22 13.85q.025 1.425-.325 2.725T20.65 19.05q-.275.45-.75.7t-1 .25H5.1q-.525 0-1-.25t-.75-.7q-.65-1.125-1-2.387T2 14q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 4m.175 7.825"></svg:path>`,
})
export class MaterialSymbolsSpeedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpeedRoundedIcon],svg[material-symbols-speed-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.45 15.5q.625.625 1.575.588T13.4 15.4l4.225-6.325q.225-.35-.062-.638t-.638-.062L10.6 12.6q-.65.45-.712 1.363t.562 1.537M5.1 20q-.55 0-1.012-.238t-.738-.712q-.65-1.175-1-2.437T2 14q0-2.075.788-3.9t2.137-3.175T8.1 4.788T12 4q2.05 0 3.85.775T19 6.888t2.15 3.125t.825 3.837q.025 1.375-.312 2.688t-1.038 2.512q-.275.475-.737.713T18.874 20z"></svg:path>`,
})
export class MaterialSymbolsSpeedRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpellcheckIcon],svg[material-symbols-spellcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.1 22l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4zM3 16L7.85 3h2.35l4.85 13h-2.3l-1.15-3.3H6.35L5.2 16zm4.05-5.2h3.9l-1.9-5.4h-.1z"></svg:path>`,
})
export class MaterialSymbolsSpellcheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpellcheckRoundedIcon],svg[material-symbols-spellcheck-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.1 19.2l4.95-4.95q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.925 4.925q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45L10.55 18.45q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275zm-7.75-6.5l-.925 2.625q-.125.3-.375.488T4.475 16q-.55 0-.85-.45t-.1-.95l4.05-10.875Q7.7 3.4 7.988 3.2t.637-.2h.8q.35 0 .638.2t.412.525l4.05 10.85q.2.525-.113.975t-.887.45q-.35 0-.625-.2t-.4-.525l-.9-2.575zm.7-1.9h3.9l-1.9-5.4h-.1z"></svg:path>`,
})
export class MaterialSymbolsSpellcheckRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneIcon],svg[material-symbols-split-scene-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5v16zm7 2V2h2v2h7q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20h-7v2z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneDownIcon],svg[material-symbols-split-scene-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v5zm2 13q-.825 0-1.412-.587T4 20v-7H2v-2h20v2h-2v7q0 .825-.587 1.413T18 22z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneDownOutlineIcon],svg[material-symbols-split-scene-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v5h-2V4H6v5zm2 13q-.825 0-1.412-.587T4 20v-7H2v-2h20v2h-2v7q0 .825-.587 1.413T18 22zM6 4h12z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneDownOutlineRoundedIcon],svg[material-symbols-split-scene-down-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v4q0 .425-.288.713T19 9t-.712-.288T18 8V4H6v4q0 .425-.288.713T5 9t-.712-.288T4 8zm-2 8q0-.425.288-.712T3 11h18q.425 0 .713.288T22 12t-.288.713T21 13h-1v7q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20v-7H3q-.425 0-.712-.288T2 12m4-8h12z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneDownOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneDownOutlineSharpIcon],svg[material-symbols-split-scene-down-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9V2h16v7h-2V4H6v5zm0 13v-9H2v-2h20v2h-2v9zM6 4h12z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneDownOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneDownRoundedIcon],svg[material-symbols-split-scene-down-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v4q0 .425-.288.713T19 9H5q-.425 0-.712-.288T4 8zm-2 8q0-.425.288-.712T3 11h18q.425 0 .713.288T22 12t-.288.713T21 13h-1v7q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20v-7H3q-.425 0-.712-.288T2 12"></svg:path>`,
})
export class MaterialSymbolsSplitSceneDownRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneDownSharpIcon],svg[material-symbols-split-scene-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9V2h16v7zm0 13v-9H2v-2h20v2h-2v9z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneDownSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneLeftIcon],svg[material-symbols-split-scene-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20V4h5q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm-4 2v-2H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h7V2h2v20z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneLeftOutlineIcon],svg[material-symbols-split-scene-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20v-2h5V6h-5V4h5q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm-4 2v-2H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h7V2h2v20zm9-16v12z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneLeftOutlineRoundedIcon],svg[material-symbols-split-scene-left-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20q-.425 0-.712-.288T15 19t.288-.712T16 18h4V6h-4q-.425 0-.712-.288T15 5t.288-.712T16 4h4q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm-4 2q-.425 0-.712-.288T11 21v-1H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h7V3q0-.425.288-.712T12 2t.713.288T13 3v18q0 .425-.288.713T12 22m8-16v12z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneLeftOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneLeftOutlineSharpIcon],svg[material-symbols-split-scene-left-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20v-2h5V6h-5V4h7v16zm-4 2v-2H2V4h9V2h2v20zm9-16v12z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneLeftOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneLeftRoundedIcon],svg[material-symbols-split-scene-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20q-.425 0-.712-.288T15 19V5q0-.425.288-.712T16 4h4q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm-4 2q-.425 0-.712-.288T11 21v-1H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h7V3q0-.425.288-.712T12 2t.713.288T13 3v18q0 .425-.288.713T12 22"></svg:path>`,
})
export class MaterialSymbolsSplitSceneLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneLeftSharpIcon],svg[material-symbols-split-scene-left-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20V4h7v16zm-4 2v-2H2V4h9V2h2v20z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneLeftSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneOutlineIcon],svg[material-symbols-split-scene-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5v2H4v12h5v2zm7 2V2h2v2h7q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20h-7v2zm2-4h7V6h-7zm-9 0V6zm16 0V6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneOutlineRoundedIcon],svg[material-symbols-split-scene-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h4q.425 0 .713.288T9 5t-.288.713T8 6H4v12h4q.425 0 .713.288T9 19t-.288.713T8 20zm8 2q-.425 0-.712-.288T11 21V3q0-.425.288-.712T12 2t.713.288T13 3v1h7q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20h-7v1q0 .425-.288.713T12 22m1-4h7V6h-7zm-9 0V6zm16 0V6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneOutlineSharpIcon],svg[material-symbols-split-scene-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h7v2H4v12h5v2zm9 2V2h2v2h9v16h-9v2zm2-4h7V6h-7zm7 0V6zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneRightOutlineIcon],svg[material-symbols-split-scene-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5v2H4v12h5v2zm7 2V2h2v2h7q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20h-7v2zm-7-4V6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneRightOutlineRoundedIcon],svg[material-symbols-split-scene-right-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h4q.425 0 .713.288T9 5t-.288.713T8 6H4v12h4q.425 0 .713.288T9 19t-.288.713T8 20zm8 2q-.425 0-.712-.288T11 21V3q0-.425.288-.712T12 2t.713.288T13 3v1h7q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20h-7v1q0 .425-.288.713T12 22m-8-4V6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneRightOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneRightOutlineSharpIcon],svg[material-symbols-split-scene-right-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h7v2H4v12h5v2zm9 2V2h2v2h9v16h-9v2zm-7-4V6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneRightOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneRoundedIcon],svg[material-symbols-split-scene-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h4q.425 0 .713.288T9 5v14q0 .425-.288.713T8 20zm8 2q-.425 0-.712-.288T11 21V3q0-.425.288-.712T12 2t.713.288T13 3v1h7q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20h-7v1q0 .425-.288.713T12 22"></svg:path>`,
})
export class MaterialSymbolsSplitSceneRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneSharpIcon],svg[material-symbols-split-scene-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h7v16zm9 2V2h2v2h9v16h-9v2z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneUpIcon],svg[material-symbols-split-scene-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20v-5h16v5q0 .825-.587 1.413T18 22zm-4-9v-2h2V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v7h2v2z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneUpOutlineIcon],svg[material-symbols-split-scene-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20v-5h2v5h12v-5h2v5q0 .825-.587 1.413T18 22zm-4-9v-2h2V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v7h2v2zm16 7H6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneUpOutlineRoundedIcon],svg[material-symbols-split-scene-up-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20v-4q0-.425.288-.712T5 15t.713.288T6 16v4h12v-4q0-.425.288-.712T19 15t.713.288T20 16v4q0 .825-.587 1.413T18 22zm-3-9q-.425 0-.712-.288T2 12t.288-.712T3 11h1V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v7h1q.425 0 .713.288T22 12t-.288.713T21 13zm15 7H6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneUpOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneUpOutlineSharpIcon],svg[material-symbols-split-scene-up-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22v-7h2v5h12v-5h2v7zm-2-9v-2h2V2h16v9h2v2zm16 7H6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneUpOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneUpRoundedIcon],svg[material-symbols-split-scene-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20v-4q0-.425.288-.712T5 15h14q.425 0 .713.288T20 16v4q0 .825-.587 1.413T18 22zm-3-9q-.425 0-.712-.288T2 12t.288-.712T3 11h1V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v7h1q.425 0 .713.288T22 12t-.288.713T21 13z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneUpSharpIcon],svg[material-symbols-split-scene-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22v-7h16v7zm-2-9v-2h2V2h16v9h2v2z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneUpSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenIcon],svg[material-symbols-splitscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenAddIcon],svg[material-symbols-splitscreen-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v.1q-.225-.05-.5-.075T20 15q-2.1 0-3.55 1.463T15 20q0 .275.025.525T15.1 21zm14 2v-2h-2v-2h2v-2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenAddOutlineIcon],svg[material-symbols-splitscreen-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19v-4v.1v-.1zm0 2q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15H5v4h10v2zm0-10q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm0-2h14V5H5zm0 0V5zm14 14v-2h-2v-2h2v-2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenAddOutlineRoundedIcon],svg[material-symbols-splitscreen-add-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19v-4v.1v-.1zm0 2q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15H5v4h9q.425 0 .713.288T15 20t-.288.713T14 21zm0-10q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm0-2h14V5H5zm0 0V5zm14 12h-1q-.425 0-.712-.288T17 20t.288-.712T18 19h1v-1q0-.425.288-.712T20 17t.713.288T21 18v1h1q.425 0 .713.288T23 20t-.288.713T22 21h-1v1q0 .425-.288.713T20 23t-.712-.288T19 22z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenAddOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenAddOutlineSharpIcon],svg[material-symbols-splitscreen-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19v-4v.1v-.1zm-2 2v-8h18v2H5v4h10v2zm0-10V3h18v8zm2-2h14V5H5zm0 0V5zm14 12h-2v-2h2v-2h2v2h2v2h-2v2h-2z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenAddRoundedIcon],svg[material-symbols-splitscreen-add-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21h-1q-.425 0-.712-.288T17 20t.288-.712T18 19h1v-1q0-.425.288-.712T20 17t.713.288T21 18v1h1q.425 0 .713.288T23 20t-.288.713T22 21h-1v1q0 .425-.288.713T20 23t-.712-.288T19 22zM5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v.1q-.225-.05-.5-.075T20 15q-2.1 0-3.55 1.463T15 20q0 .275.025.525T15.1 21z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenAddRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenAddSharpIcon],svg[material-symbols-splitscreen-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11V3h18v8zm0 10v-8h18v2.1q-.275-.05-.513-.075T20 15q-2.125 0-3.562 1.475T15 20q0 .275.025.525T15.1 21zm16 2v-2h-2v-2h2v-2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenBottomIcon],svg[material-symbols-splitscreen-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-10q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm14-6H5v4h14z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenBottomOutlineIcon],svg[material-symbols-splitscreen-bottom-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-10q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm14-6H5v4h14zM5 9V5z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenBottomOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenBottomOutlineSharpIcon],svg[material-symbols-splitscreen-bottom-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-8h18v8zm0-10V3h18v8zm16-6H5v4h14zM5 9V5z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenBottomOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenBottomSharpIcon],svg[material-symbols-splitscreen-bottom-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-8h18v8zm0-10V3h18v8zm16-6H5v4h14z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenBottomSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenLandscapeIcon],svg[material-symbols-splitscreen-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16h5V8h-5zm-7 0h5V8H6zm-2 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenLandscapeOutlineIcon],svg[material-symbols-splitscreen-landscape-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16h5V8h-5zm-7 0h5V8H6zm-2 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 6H4v12h16zM4 6v12z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenLandscapeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenLandscapeOutlineRoundedIcon],svg[material-symbols-splitscreen-landscape-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16h3q.425 0 .713-.288T18 15V9q0-.425-.288-.712T17 8h-3q-.425 0-.712.288T13 9v6q0 .425.288.713T14 16m-7 0h3q.425 0 .713-.288T11 15V9q0-.425-.288-.712T10 8H7q-.425 0-.712.288T6 9v6q0 .425.288.713T7 16m-3 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 6H4v12h16zM4 6v12z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenLandscapeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenLandscapeOutlineSharpIcon],svg[material-symbols-splitscreen-landscape-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16h5V8h-5zm-7 0h5V8H6zm-4 4V4h20v16zm18-2V6H4v12zM4 6v12z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenLandscapeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenLandscapeRoundedIcon],svg[material-symbols-splitscreen-landscape-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16h3q.425 0 .713-.288T18 15V9q0-.425-.288-.712T17 8h-3q-.425 0-.712.288T13 9v6q0 .425.288.713T14 16m-7 0h3q.425 0 .713-.288T11 15V9q0-.425-.288-.712T10 8H7q-.425 0-.712.288T6 9v6q0 .425.288.713T7 16m-3 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenLandscapeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenLandscapeSharpIcon],svg[material-symbols-splitscreen-landscape-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16h5V8h-5zm-7 0h5V8H6zm-4 4V4h20v16z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenLandscapeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenLeftIcon],svg[material-symbols-splitscreen-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zm10 0q-.825 0-1.412-.587T13 19V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm4-16h-4v14h4z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenLeftOutlineIcon],svg[material-symbols-splitscreen-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zm10 0q-.825 0-1.412-.587T13 19V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm4-16h-4v14h4zm-4 14h4z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenLeftOutlineSharpIcon],svg[material-symbols-splitscreen-left-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h8v18zm10 0V3h8v18zm6-16h-4v14h4zm-4 14h4z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenLeftOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenLeftSharpIcon],svg[material-symbols-splitscreen-left-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h8v18zm10 0V3h8v18zm6-16h-4v14h4z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenLeftSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenOutlineIcon],svg[material-symbols-splitscreen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm0-2h14V5H5zm0 12q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-2h14v-4H5zM5 9V5zm0 10v-4z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenOutlineSharpIcon],svg[material-symbols-splitscreen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11V3h18v8zm2-2h14V5H5zM3 21v-8h18v8zm2-2h14v-4H5zM5 9V5zm0 10v-4z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenPortraitIcon],svg[material-symbols-splitscreen-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h8v-5H8zm0-7h8V6H8zm12 9q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenPortraitOutlineIcon],svg[material-symbols-splitscreen-portrait-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h8v-5H8zm0-7h8V6H8zm12 9q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4zm-2 0V4H6v16zm0-16H6z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenPortraitOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenPortraitOutlineRoundedIcon],svg[material-symbols-splitscreen-portrait-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h6q.425 0 .713-.288T16 17v-3q0-.425-.288-.712T15 13H9q-.425 0-.712.288T8 14v3q0 .425.288.713T9 18m0-7h6q.425 0 .713-.288T16 10V7q0-.425-.288-.712T15 6H9q-.425 0-.712.288T8 7v3q0 .425.288.713T9 11m11 9q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4zm-2 0V4H6v16zm0-16H6z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenPortraitOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenPortraitOutlineSharpIcon],svg[material-symbols-splitscreen-portrait-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h8v-5H8zm0-7h8V6H8zM4 22V2h16v20zm2-2h12V4H6zM18 4H6z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenPortraitOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenPortraitRoundedIcon],svg[material-symbols-splitscreen-portrait-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h6q.425 0 .713-.288T16 17v-3q0-.425-.288-.712T15 13H9q-.425 0-.712.288T8 14v3q0 .425.288.713T9 18m0-7h6q.425 0 .713-.288T16 10V7q0-.425-.288-.712T15 6H9q-.425 0-.712.288T8 7v3q0 .425.288.713T9 11M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenPortraitRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenPortraitSharpIcon],svg[material-symbols-splitscreen-portrait-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h8v-5H8zm0-7h8V6H8zM4 22V2h16v20z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenPortraitSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenRightIcon],svg[material-symbols-splitscreen-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21q-.825 0-1.412-.587T13 19V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zM5 5v14h4V5z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenRightOutlineIcon],svg[material-symbols-splitscreen-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21q-.825 0-1.412-.587T13 19V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zM5 5v14h4V5zm4 14H5z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenRightOutlineSharpIcon],svg[material-symbols-splitscreen-right-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21V3h8v18zM3 21V3h8v18zM5 5v14h4V5zm4 14H5z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenRightOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenRightSharpIcon],svg[material-symbols-splitscreen-right-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21V3h8v18zM3 21V3h8v18zM5 5v14h4V5z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenRightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenSharpIcon],svg[material-symbols-splitscreen-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11V3h18v8zm0 10v-8h18v8z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenTopIcon],svg[material-symbols-splitscreen-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-2h14v-4H5z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenTopOutlineIcon],svg[material-symbols-splitscreen-top-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11q-.825 0-1.412-.587T3 9V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v4q0 .825-.587 1.413T19 11zm0 10q-.825 0-1.412-.587T3 19v-4q0-.825.588-1.412T5 13h14q.825 0 1.413.588T21 15v4q0 .825-.587 1.413T19 21zm0-2h14v-4H5zm0-4v4z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenTopOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenTopOutlineSharpIcon],svg[material-symbols-splitscreen-top-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11V3h18v8zm0 10v-8h18v8zm2-2h14v-4H5zm0-4v4z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenTopOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenTopSharpIcon],svg[material-symbols-splitscreen-top-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11V3h18v8zm0 10v-8h18v8zm2-2h14v-4H5z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenTopSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenVerticalAddIcon],svg[material-symbols-splitscreen-vertical-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 23v-2h-2v-2h2v-2h2v2h2v2h-2v2zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zm10.1 0q-.875 0-1.487-.575T13 19V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v10.1q-.25-.05-.5-.075T20 15q-2.1 0-3.562 1.488T15 20.075q0 .25.025.475t.075.45"></svg:path>`,
})
export class MaterialSymbolsSplitscreenVerticalAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenVerticalAddOutlineIcon],svg[material-symbols-splitscreen-vertical-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-4.025h.125h-.1zm-6 0q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v10h-2V5h-4v16q-.825 0-1.412-.587T13 19zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zM9 5H5v14h4zm0 0H5zm10 18v-2h-2v-2h2v-2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenVerticalAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenVerticalAddOutlineRoundedIcon],svg[material-symbols-splitscreen-vertical-add-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-4.025h.125h-.1zm-6 0q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v9q0 .425-.288.713T20 15t-.712-.288T19 14V5h-4v16q-.825 0-1.412-.587T13 19zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zM9 5H5v14h4zm0 0H5zm10 16h-1q-.425 0-.712-.288T17 20t.288-.712T18 19h1v-1q0-.425.288-.712T20 17t.713.288T21 18v1h1q.425 0 .713.288T23 20t-.288.713T22 21h-1v1q0 .425-.288.713T20 23t-.712-.288T19 22z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenVerticalAddOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenVerticalAddOutlineSharpIcon],svg[material-symbols-splitscreen-vertical-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-4.025h.125h-.1zm-6-2h8v12h-2V5h-4v16h-2zM3 21V3h8v18zM9 5H5v14h4zm0 0H5zm10 18v-2h-2v-2h2v-2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenVerticalAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenVerticalAddRoundedIcon],svg[material-symbols-splitscreen-vertical-add-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21h-1q-.425 0-.712-.288T17 20t.288-.712T18 19h1v-1q0-.425.288-.712T20 17t.713.288T21 18v1h1q.425 0 .713.288T23 20t-.288.713T22 21h-1v1q0 .425-.288.713T20 23t-.712-.288T19 22zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4q.825 0 1.413.588T11 5v14q0 .825-.587 1.413T9 21zm10.1 0q-.875 0-1.487-.575T13 19V5q0-.825.588-1.412T15 3h4q.825 0 1.413.588T21 5v10.1q-.25-.05-.5-.075T20 15q-2.1 0-3.562 1.488T15 20.075q0 .25.025.475t.075.45"></svg:path>`,
})
export class MaterialSymbolsSplitscreenVerticalAddRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenVerticalAddSharpIcon],svg[material-symbols-splitscreen-vertical-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h8v18zm10 0V3h8v12.1q-.25-.05-.5-.075T20 15q-2.075 0-3.537 1.45T15 19.975q0 .275.025.525t.075.5zm6 2v-2h-2v-2h2v-2h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenVerticalAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpo2Icon],svg[material-symbols-spo2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-.425 0-.712-.288T11 19v-4q0-.425.288-.712T12 14h2.5q.425 0 .713.288T15.5 15v4q0 .425-.288.713T14.5 20zm.5-1.5H14v-3h-1.5zM17 22v-2.75q0-.425.288-.712T18 18.25h2v-.75h-3V16h3.5q.425 0 .713.288T21.5 17v1.75q0 .425-.288.713t-.712.287h-2v.75h3V22zm-8-.05q-3.075-.35-5.038-2.637T2 13.8q0-2.5 1.988-5.437T10 2q3.3 2.8 5.238 5.3T17.75 12H11q-.825 0-1.412.588T9 14z"></svg:path>`,
})
export class MaterialSymbolsSpo2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpo2OutlineIcon],svg[material-symbols-spo2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-.425 0-.712-.288T11 19v-4q0-.425.288-.712T12 14h2.5q.425 0 .713.288T15.5 15v4q0 .425-.288.713T14.5 20zm.5-1.5H14v-3h-1.5zM17 22v-2.75q0-.425.288-.712T18 18.25h2v-.75h-3V16h3.5q.425 0 .713.288T21.5 17v1.75q0 .425-.288.713t-.712.287h-2v.75h3V22zm-8-.05q-3.075-.35-5.038-2.637T2 13.8q0-2.5 1.988-5.437T10 2q3.3 2.8 5.238 5.3T17.75 12h-2.075q-.55-1.575-1.975-3.425T10 4.65Q7.025 7.375 5.513 9.675T4 13.8q0 2.4 1.388 4.088T9 19.925zm.85-8.15"></svg:path>`,
})
export class MaterialSymbolsSpo2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpo2OutlineRoundedIcon],svg[material-symbols-spo2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-.425 0-.712-.288T11 19v-4q0-.425.288-.712T12 14h2.5q.425 0 .713.288T15.5 15v4q0 .425-.288.713T14.5 20zm.5-1.5H14v-3h-1.5zm8.25 3.5H18q-.425 0-.712-.288T17 21v-1.75q0-.425.288-.712T18 18.25h2v-.75h-2.25q-.325 0-.537-.213T17 16.75t.213-.537t.537-.213h2.75q.425 0 .713.288T21.5 17v1.75q0 .425-.288.713t-.712.287h-2v.75h2.25q.325 0 .538.213t.212.537t-.213.538t-.537.212M10 2.35q.2 0 .363.063t.312.187q.9.8 1.838 1.7t1.8 1.888t1.6 2.05t1.262 2.187q.175.375.013.75t-.563.5t-.763-.05t-.562-.55q-.425-.9-1.037-1.763t-1.325-1.687t-1.463-1.575T10 4.65Q7.025 7.375 5.513 9.675T4 13.8q0 2.025 1.075 3.675t3.05 2.25q.425.125.675.488t.1.762q-.175.425-.612.6t-.913.025q-2.525-.8-3.95-3.012T2 13.8q0-1.625.725-3.213T4.55 7.564T6.938 4.85T9.325 2.6q.15-.125.313-.187T10 2.35M9.85 13.8"></svg:path>`,
})
export class MaterialSymbolsSpo2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpo2OutlineSharpIcon],svg[material-symbols-spo2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20v-6h4.5v6zm1.5-1.5H14v-3h-1.5zM17 22v-3.75h3v-.75h-3V16h4.5v3.75h-3v.75h3V22zm-8-.05q-3.075-.35-5.038-2.637T2 13.8q0-2.5 1.988-5.437T10 2q3.3 2.8 5.238 5.3T17.75 12h-2.075q-.55-1.575-1.975-3.425T10 4.65Q7.025 7.375 5.513 9.675T4 13.8q0 2.4 1.388 4.088T9 19.925zm.85-8.15"></svg:path>`,
})
export class MaterialSymbolsSpo2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpo2RoundedIcon],svg[material-symbols-spo2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-.425 0-.712-.288T11 19v-4q0-.425.288-.712T12 14h2.5q.425 0 .713.288T15.5 15v4q0 .425-.288.713T14.5 20zm.5-1.5H14v-3h-1.5zM18 22q-.425 0-.712-.288T17 21v-1.75q0-.425.288-.712T18 18.25h2v-.75h-2.25q-.325 0-.537-.213T17 16.75t.213-.537t.537-.213h2.75q.425 0 .713.288T21.5 17v1.75q0 .425-.288.713t-.712.287h-2v.75h2.25q.325 0 .538.213t.212.537t-.213.538t-.537.212zM10 2.35q.2 0 .375.063t.3.187q1.95 1.725 3.738 3.625t2.837 4.325q.225.5-.1.975t-.9.475H11q-.825 0-1.412.588T9 14v6.7q0 .425-.325.738t-.75.312q-2.95 0-4.437-2.363T2 13.8q0-3.5 2.338-6.175T9.325 2.6q.125-.125.3-.188T10 2.35"></svg:path>`,
})
export class MaterialSymbolsSpo2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpo2SharpIcon],svg[material-symbols-spo2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20v-6h4.5v6zm1.5-1.5H14v-3h-1.5zM17 22v-3.75h3v-.75h-3V16h4.5v3.75h-3v.75h3V22zm-8-.05q-3.075-.35-5.038-2.637T2 13.8q0-2.5 1.988-5.437T10 2q3.3 2.8 5.238 5.3T17.75 12H9z"></svg:path>`,
})
export class MaterialSymbolsSpo2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpokeIcon],svg[material-symbols-spoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11q-1.65 0-2.825-1.175T8 7t1.175-2.825T12 3t2.825 1.175T16 7t-1.175 2.825T12 11M7 21q-1.65 0-2.825-1.175T3 17t1.175-2.825T7 13t2.825 1.175T11 17t-1.175 2.825T7 21m10 0q-1.65 0-2.825-1.175T13 17t1.175-2.825T17 13t2.825 1.175T21 17t-1.175 2.825T17 21"></svg:path>`,
})
export class MaterialSymbolsSpokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpokeOutlineIcon],svg[material-symbols-spoke-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11q-1.65 0-2.825-1.175T8 7t1.175-2.825T12 3t2.825 1.175T16 7t-1.175 2.825T12 11m0-2q.825 0 1.413-.587T14 7t-.587-1.412T12 5t-1.412.588T10 7t.588 1.413T12 9M7 21q-1.65 0-2.825-1.175T3 17t1.175-2.825T7 13t2.825 1.175T11 17t-1.175 2.825T7 21m0-2q.825 0 1.412-.587T9 17t-.587-1.412T7 15t-1.412.588T5 17t.588 1.413T7 19m10 2q-1.65 0-2.825-1.175T13 17t1.175-2.825T17 13t2.825 1.175T21 17t-1.175 2.825T17 21m0-2q.825 0 1.413-.587T19 17t-.587-1.412T17 15t-1.412.588T15 17t.588 1.413T17 19m0-2"></svg:path>`,
})
export class MaterialSymbolsSpokeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpoofIcon],svg[material-symbols-spoof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.5q-3.65 0-6.65-2.038T1 12q1.35-3.425 4.35-5.463T12 4.5q3.65 0 6.65 2.038T23 12q-1.35 3.425-4.35 5.463T12 19.5Zm-8-8.875q1.65-1.5 3.713-2.313T12 7.5q2.225 0 4.288.813T20 10.624Q18.65 8.7 16.537 7.6T12 6.5q-2.425 0-4.538 1.1T4 10.625Zm8 6.875q2.4 0 4.463-1.063T19.9 13.5q-.725-1.025-1.65-1.788t-2.025-1.262q.125.35.2.738T16.5 12q0 1.875-1.313 3.188T12 16.5q-1.875 0-3.188-1.313T7.5 12q0-.425.075-.813t.2-.737q-1.1.5-2.025 1.275T4.1 13.5q1.375 1.875 3.438 2.938T12 17.5Zm0-3q1.05 0 1.775-.725T14.5 12q0-1.05-.725-1.775T12 9.5q-1.05 0-1.775.725T9.5 12q0 1.05.725 1.775T12 14.5Z"></svg:path>`,
})
export class MaterialSymbolsSpoofIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpoofRoundedIcon],svg[material-symbols-spoof-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.5q-3.275 0-6.075-1.663t-4.35-4.562q-.15-.3-.225-.625T1.275 12q0-.325.075-.65t.225-.625q1.55-2.9 4.35-4.563T12 4.5q3.275 0 6.075 1.663t4.35 4.562q.15.3.225.625t.075.65q0 .325-.075.65t-.225.625q-1.55 2.9-4.35 4.563T12 19.5Zm0-2q2.4 0 4.463-1.063T19.9 13.5q-.725-1.025-1.65-1.788t-2.025-1.262q.125.35.2.738T16.5 12q0 1.875-1.313 3.188T12 16.5q-1.875 0-3.188-1.313T7.5 12q0-.425.075-.813t.2-.737q-1.1.5-2.025 1.275T4.1 13.5q1.375 1.875 3.438 2.938T12 17.5Zm0-3q1.05 0 1.775-.725T14.5 12q0-1.05-.725-1.775T12 9.5q-1.05 0-1.775.725T9.5 12q0 1.05.725 1.775T12 14.5Zm-8-3.875q1.65-1.5 3.713-2.313T12 7.5q2.225 0 4.288.813T20 10.624Q18.65 8.7 16.537 7.6T12 6.5q-2.425 0-4.538 1.1T4 10.625Z"></svg:path>`,
})
export class MaterialSymbolsSpoofRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSpoofSharpIcon],svg[material-symbols-spoof-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.5q-3.65 0-6.65-2.038Q2.35 15.425 1 12q1.35-3.425 4.35-5.463Q8.35 4.5 12 4.5q3.65 0 6.65 2.037Q21.65 8.575 23 12q-1.35 3.425-4.35 5.462q-3 2.038-6.65 2.038Zm-8-8.875q1.65-1.5 3.713-2.313Q9.775 7.5 12 7.5t4.288.812q2.062.813 3.712 2.313Q18.65 8.7 16.538 7.6Q14.425 6.5 12 6.5q-2.425 0-4.537 1.1Q5.35 8.7 4 10.625Zm8 6.875q2.4 0 4.463-1.062q2.062-1.063 3.437-2.938q-.725-1.025-1.65-1.788q-.925-.762-2.025-1.262q.125.35.2.738q.075.387.075.812q0 1.875-1.312 3.188Q13.875 16.5 12 16.5q-1.875 0-3.188-1.312Q7.5 13.875 7.5 12q0-.425.075-.812q.075-.388.2-.738q-1.1.5-2.025 1.275q-.925.775-1.65 1.775q1.375 1.875 3.438 2.938Q9.6 17.5 12 17.5Zm0-3q1.05 0 1.775-.725q.725-.725.725-1.775q0-1.05-.725-1.775Q13.05 9.5 12 9.5q-1.05 0-1.775.725Q9.5 10.95 9.5 12q0 1.05.725 1.775q.725.725 1.775.725Z"></svg:path>`,
})
export class MaterialSymbolsSpoofSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsIcon],svg[material-symbols-sports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19q-2.5 0-4.25-1.75T5 13q0-.275.025-.55t.075-.55q-.125.05-.3.075T4.5 12q-1.05 0-1.775-.725T2 9.5t.688-1.775T4.425 7q.825 0 1.488.462T6.85 8.65q.825-.75 1.888-1.2T11 7h11v4h-5v2q0 2.5-1.75 4.25T11 19m-6.5-8.5q.425 0 .713-.288T5.5 9.5t-.288-.712T4.5 8.5t-.712.288T3.5 9.5t.288.713t.712.287M11 15q.825 0 1.413-.587T13 13t-.587-1.412T11 11t-1.412.588T9 13t.588 1.413T11 15"></svg:path>`,
})
export class MaterialSymbolsSportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsAndOutdoorsIcon],svg[material-symbols-sports-and-outdoors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.35 19.8l.3-1.4q.075-.325.313-.537t.587-.263l3.1-.25q.325-.05.6.125t.4.475l.4.95q.975-.575 1.75-1.387t1.3-1.813l-.3-.15q-.275-.2-.4-.487t-.05-.613l.7-3.05q.075-.3.313-.5t.537-.25q-.125-.625-.312-1.213T19.1 8.3q-.225.125-.488.113t-.462-.163l-2.65-1.6q-.275-.175-.4-.475t-.05-.625l.2-.85q-.775-.35-1.588-.525T12 4q-.35 0-.725.038t-.725.112l.75 1.7q.125.3.063.625T11.05 7L8.7 9.05q-.25.225-.587.25T7.5 9.15l-2.3-1.4q-.575.95-.887 2.038T4 12q0 .4.1 1.3l2.2-.2q.35-.05.638.113t.412.487l1.2 2.85q.125.3.063.625T8.3 17.7l-.95.8q.675.5 1.438.825t1.562.475m1.8-4.3q-.325.05-.6-.125t-.4-.475L9.8 11.8q-.125-.3-.037-.625t.337-.525l2.55-2.15q.225-.225.55-.25t.6.15l2.8 1.65q.275.175.425.475t.075.625l-.8 3.25q-.075.325-.3.538t-.55.262zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsSportsAndOutdoorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsBarIcon],svg[material-symbols-sports-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21v-8.65q-1.3-.35-2.15-1.4T3 8.5q0-1.325.763-2.35t1.962-1.425q.575-1.2 1.713-1.95T10 2.025q.875 0 1.638.3t1.387.8q.25-.05.475-.088T14 3q1.65 0 2.825 1.175T18 7q0 .55-.137 1.05T17.45 9H19q.825 0 1.413.588T21 11v6q0 .825-.587 1.413T19 19h-2v2zM5 8.5q0 .825.588 1.413T7 10.5q.8 0 1.363-.525T9.525 8.8q.625-.675 1.413-1.238T13 7h3q0-.825-.587-1.412T14 5q-.625 0-1.05.163l-.425.162l-.775-.65q-.275-.225-.713-.438T10 4.025q-.8 0-1.463.425T7.525 5.6l-.35.75l-.8.275q-.625.2-1 .713T5 8.5M17 17h2v-6h-2z"></svg:path>`,
})
export class MaterialSymbolsSportsBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsBarOutlineIcon],svg[material-symbols-sports-bar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19h7V9h-2q-.7 0-1.15.35t-1.075 1.025q-.5.55-1.162 1.138T8 12.375zm-2 2v-8.65q-1.3-.35-2.15-1.4T3 8.5q0-1.325.763-2.35t1.962-1.425q.575-1.2 1.713-1.95T10 2.025q.875 0 1.638.3t1.387.8q.25-.05.475-.088T14 3q1.65 0 2.825 1.175T18 7q0 .55-.137 1.05T17.45 9H19q.825 0 1.413.588T21 11v6q0 .825-.587 1.413T19 19h-2v2zM5 8.5q0 .825.588 1.413T7 10.5q.8 0 1.363-.525T9.525 8.8q.625-.675 1.413-1.238T13 7h3q0-.825-.587-1.412T14 5q-.625 0-1.05.163l-.425.162l-.775-.65q-.275-.225-.713-.438T10 4.025q-.8 0-1.463.425T7.525 5.6l-.35.75l-.8.275q-.625.2-1 .713T5 8.5M17 17h2v-6h-2zm-9 2h7z"></svg:path>`,
})
export class MaterialSymbolsSportsBarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsBarOutlineRoundedIcon],svg[material-symbols-sports-bar-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19h7V9h-2q-.7 0-1.15.35t-1.075 1.025q-.5.55-1.162 1.138T8 12.375zm-2 0v-6.65q-1.3-.35-2.15-1.4T3 8.5q0-1.325.763-2.35t1.962-1.425q.575-1.2 1.713-1.95T10 2.025q.875 0 1.638.3t1.387.8q.25-.05.475-.088T14 3q1.65 0 2.825 1.175T18 7q0 .55-.137 1.05T17.45 9H19q.825 0 1.413.588T21 11v6q0 .825-.587 1.413T19 19h-2q0 .825-.587 1.413T15 21H8q-.825 0-1.412-.587T6 19M5 8.5q0 .825.588 1.413T7 10.5q.8 0 1.363-.525T9.525 8.8q.625-.675 1.413-1.238T13 7h3q0-.825-.587-1.412T14 5q-.625 0-1.05.163l-.425.162l-.775-.65q-.275-.225-.713-.438T10 4.025q-.8 0-1.463.425T7.525 5.6l-.35.75l-.8.275q-.625.2-1 .713T5 8.5M17 17h2v-6h-2zm-9 2h7z"></svg:path>`,
})
export class MaterialSymbolsSportsBarOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsBarOutlineSharpIcon],svg[material-symbols-sports-bar-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19h7V9h-2q-.7 0-1.15.35t-1.075 1.025q-.5.55-1.162 1.138T8 12.375zm-2 2v-8.65q-1.3-.35-2.15-1.4T3 8.5q0-1.325.763-2.35t1.962-1.425q.575-1.2 1.713-1.95T10 2.025q.875 0 1.638.3t1.387.8q.25-.05.475-.088T14 3q1.65 0 2.825 1.175T18 7q0 .55-.137 1.05T17.45 9H21v10h-4v2zM5 8.5q0 .825.588 1.413T7 10.5q.8 0 1.363-.525T9.525 8.8q.625-.675 1.413-1.238T13 7h3q0-.825-.587-1.412T14 5q-.625 0-1.05.163l-.425.162l-.775-.65q-.275-.225-.713-.438T10 4.025q-.8 0-1.463.425T7.525 5.6l-.35.75l-.8.275q-.625.2-1 .713T5 8.5M17 17h2v-6h-2zm-9 2h7z"></svg:path>`,
})
export class MaterialSymbolsSportsBarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsBarRoundedIcon],svg[material-symbols-sports-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19v-6.65q-1.3-.35-2.15-1.4T3 8.5q0-1.325.763-2.35t1.962-1.425q.575-1.2 1.713-1.95T10 2.025q.875 0 1.638.3t1.387.8q.25-.05.475-.088T14 3q1.65 0 2.825 1.175T18 7q0 .55-.137 1.05T17.45 9H19q.825 0 1.413.588T21 11v6q0 .825-.587 1.413T19 19h-2q-.525.525-.862 1.263T15 21H8q-.825 0-1.412-.587T6 19M5 8.5q0 .825.588 1.413T7 10.5q.8 0 1.363-.525T9.525 8.8q.625-.675 1.413-1.238T13 7h3q0-.825-.587-1.412T14 5q-.625 0-1.05.163l-.425.162l-.775-.65q-.275-.225-.713-.438T10 4.025q-.8 0-1.463.425T7.525 5.6l-.35.75l-.8.275q-.625.2-1 .713T5 8.5M17 17h2v-6h-2z"></svg:path>`,
})
export class MaterialSymbolsSportsBarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsBarSharpIcon],svg[material-symbols-sports-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21v-8.65q-1.3-.35-2.15-1.4T3 8.5q0-1.325.763-2.35t1.962-1.425q.575-1.2 1.713-1.95T10 2.025q.875 0 1.638.3t1.387.8q.25-.05.475-.088T14 3q1.65 0 2.825 1.175T18 7q0 .55-.137 1.05T17.45 9H21v10h-4v2zM5 8.5q0 .825.588 1.413T7 10.5q.8 0 1.363-.525T9.525 8.8q.625-.675 1.413-1.238T13 7h3q0-.825-.587-1.412T14 5q-.625 0-1.05.163l-.425.162l-.775-.65q-.275-.225-.713-.438T10 4.025q-.8 0-1.463.425T7.525 5.6l-.35.75l-.8.275q-.625.2-1 .713T5 8.5M17 17h2v-6h-2z"></svg:path>`,
})
export class MaterialSymbolsSportsBarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsBaseballIcon],svg[material-symbols-sports-baseball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.175 18.225q-1.05-1.35-1.612-2.937T2 12t.563-3.287t1.612-2.938Q5.625 6.9 6.45 8.538T7.275 12t-.825 3.463t-2.275 2.762M12 22q-1.8 0-3.437-.6t-2.988-1.75q1.725-1.425 2.7-3.412T9.25 12t-.975-4.237t-2.7-3.413Q6.925 3.2 8.563 2.6T12 2t3.438.6t2.987 1.75q-1.725 1.425-2.7 3.413T14.75 12t.975 4.238t2.7 3.412q-1.35 1.15-2.988 1.75T12 22m7.825-3.775q-1.45-1.125-2.275-2.762T16.725 12t.825-3.463t2.275-2.762q1.05 1.35 1.613 2.938T22 12t-.562 3.288t-1.613 2.937"></svg:path>`,
})
export class MaterialSymbolsSportsBaseballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsBaseballOutlineIcon],svg[material-symbols-sports-baseball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.6 16.8q1.125-.875 1.763-2.125T8 12t-.638-2.675T5.6 7.2q-.775 1.05-1.187 2.275T4 12t.413 2.525T5.6 16.8M12 20q1.375 0 2.663-.437T17 18.25q-1.425-1.15-2.212-2.787T14 12t.788-3.463T17 5.75q-1.05-.875-2.337-1.312T12 4t-2.662.438T7 5.75Q8.425 6.9 9.213 8.538T10 12t-.788 3.463T7 18.25q1.05.875 2.338 1.313T12 20m6.4-3.2q.775-1.05 1.188-2.275T20 12t-.413-2.525T18.4 7.2q-1.125.875-1.763 2.125T16 12t.638 2.675T18.4 16.8M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsSportsBaseballOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsBasketballIcon],svg[material-symbols-sports-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.05 10.975q.125-1.275.525-2.412t1.1-2.138q.875.9 1.463 2.088t.762 2.462zm16.05 0q.175-1.275.75-2.45t1.475-2.075q.7.975 1.1 2.125t.525 2.4zM3.675 17.55q-.7-.975-1.1-2.113t-.525-2.412H5.9q-.175 1.275-.763 2.45T3.676 17.55m16.65 0q-.9-.9-1.475-2.075t-.75-2.45h3.85q-.125 1.25-.525 2.4t-1.1 2.125m-12.4-6.575q-.2-1.8-.975-3.325T4.925 4.9q1.2-1.2 2.738-1.925t3.312-.925v8.925zm5.1 0V2.05q1.775.2 3.313.925T19.075 4.9Q17.8 6.1 17.038 7.638t-.963 3.337zm-2.05 10.975q-1.8-.2-3.325-.937t-2.725-1.938q1.275-1.2 2.038-2.725t.962-3.325h3.05zm2.05 0v-8.925h3.05q.2 1.8.963 3.338t2.037 2.737q-1.2 1.2-2.738 1.925t-3.312.925"></svg:path>`,
})
export class MaterialSymbolsSportsBasketballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsBasketballOutlineIcon],svg[material-symbols-sports-basketball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.05 11H6.9q-.15-.95-.575-1.775T5.25 7.75q-.45.725-.763 1.538T4.05 11m13.05 0h2.85q-.125-.9-.437-1.713T18.75 7.75q-.65.65-1.075 1.475T17.1 11M5.25 16.25q.65-.65 1.075-1.475T6.9 13H4.05q.125.9.438 1.713t.762 1.537m13.5 0q.45-.725.763-1.537T19.95 13H17.1q.15.95.575 1.775t1.075 1.475M8.95 11H11V4.05q-1.325.2-2.463.738T6.5 6.2q.975.95 1.613 2.163T8.95 11M13 11h2.05q.2-1.425.838-2.637T17.5 6.2q-.9-.875-2.037-1.412T13 4.05zm-2 8.95V13H8.95q-.2 1.425-.837 2.638T6.5 17.8q.9.875 2.038 1.413T11 19.95m2 0q1.325-.2 2.463-.737T17.5 17.8q-.975-.95-1.612-2.162T15.05 13H13zM12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsSportsBasketballOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsCricketIcon],svg[material-symbols-sports-cricket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14.2L12.2 17q-.3.3-.7.3t-.7-.3L2.3 8.5Q2 8.2 2 7.825t.3-.675l2.8-2.8q.3-.3.725-.3t.725.3L15 12.8q.3.3.3.7t-.3.7m3.6 7.8l-4.25-4.25l1.4-1.4L20 20.6zm-.1-13q-1.45 0-2.475-1.025T15 5.5t1.025-2.475T18.5 2t2.475 1.025T22 5.5t-1.025 2.475T18.5 9"></svg:path>`,
})
export class MaterialSymbolsSportsCricketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsCricketOutlineIcon],svg[material-symbols-sports-cricket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14.2L12.2 17q-.3.3-.7.3t-.7-.3L2.3 8.5Q2 8.2 2 7.825t.3-.675l2.8-2.8q.3-.3.725-.3t.725.3L15 12.8q.3.3.3.7t-.3.7m-3.5.7l1.4-1.4l-7.1-7.1l-1.4 1.4zm7.1 7.1l-4.25-4.25l1.4-1.4L20 20.6zm-.1-13q-1.45 0-2.475-1.025T15 5.5t1.025-2.475T18.5 2t2.475 1.025T22 5.5t-1.025 2.475T18.5 9m0-2q.625 0 1.063-.437T20 5.5t-.437-1.062T18.5 4t-1.062.438T17 5.5t.438 1.063T18.5 7m-9.85 3.65"></svg:path>`,
})
export class MaterialSymbolsSportsCricketOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsCricketOutlineRoundedIcon],svg[material-symbols-sports-cricket-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14.2L12.2 17q-.3.3-.7.3t-.7-.3L2.3 8.5Q2 8.2 2 7.825t.3-.675l2.8-2.8q.3-.3.725-.3t.725.3L15 12.8q.3.3.3.7t-.3.7m-3.5.7l1.4-1.4l-7.1-7.1l-1.4 1.4zm6.4 6.4l-3.55-3.55l1.4-1.4l3.55 3.55q.275.275.275.7t-.275.7t-.7.275t-.7-.275M18.5 9q-1.45 0-2.475-1.025T15 5.5t1.025-2.475T18.5 2t2.475 1.025T22 5.5t-1.025 2.475T18.5 9m0-2q.625 0 1.063-.437T20 5.5t-.437-1.062T18.5 4t-1.062.438T17 5.5t.438 1.063T18.5 7m-9.85 3.65"></svg:path>`,
})
export class MaterialSymbolsSportsCricketOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsCricketOutlineSharpIcon],svg[material-symbols-sports-cricket-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 17.7L1.625 7.825l4.2-4.2L15.7 13.5zm0-2.8l1.4-1.4l-7.1-7.1l-1.4 1.4zm7.1 7.1l-4.25-4.25l1.4-1.4L20 20.6zm-.1-13q-1.45 0-2.475-1.025T15 5.5t1.025-2.475T18.5 2t2.475 1.025T22 5.5t-1.025 2.475T18.5 9m0-2q.625 0 1.063-.437T20 5.5t-.437-1.062T18.5 4t-1.062.438T17 5.5t.438 1.063T18.5 7m-9.85 3.65"></svg:path>`,
})
export class MaterialSymbolsSportsCricketOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsCricketRoundedIcon],svg[material-symbols-sports-cricket-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14.2L12.2 17q-.3.3-.7.3t-.7-.3L2.3 8.5Q2 8.2 2 7.825t.3-.675l2.8-2.8q.3-.3.725-.3t.725.3L15 12.8q.3.3.3.7t-.3.7m2.9 7.1l-3.55-3.55l1.4-1.4l3.55 3.55q.275.275.275.7t-.275.7t-.7.275t-.7-.275M18.5 9q-1.45 0-2.475-1.025T15 5.5t1.025-2.475T18.5 2t2.475 1.025T22 5.5t-1.025 2.475T18.5 9"></svg:path>`,
})
export class MaterialSymbolsSportsCricketRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsCricketSharpIcon],svg[material-symbols-sports-cricket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 17.7L1.625 7.825l4.2-4.2L15.7 13.5zm7.1 4.3l-4.25-4.25l1.4-1.4L20 20.6zm-.1-13q-1.45 0-2.475-1.025T15 5.5t1.025-2.475T18.5 2t2.475 1.025T22 5.5t-1.025 2.475T18.5 9"></svg:path>`,
})
export class MaterialSymbolsSportsCricketSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsEsportsIcon],svg[material-symbols-sports-esports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.55 19q-1.275 0-1.975-.888T2.05 15.95l1.05-7.5q.225-1.5 1.338-2.475T7.05 5h9.9q1.5 0 2.613.975T20.9 8.45l1.05 7.5q.175 1.275-.525 2.163T19.45 19q-.525 0-.975-.187t-.825-.563L15.4 16H8.6l-2.25 2.25q-.375.375-.825.563T4.55 19M17 13q.425 0 .713-.288T18 12t-.288-.712T17 11t-.712.288T16 12t.288.713T17 13m-2-3q.425 0 .713-.288T16 9t-.288-.712T15 8t-.712.288T14 9t.288.713T15 10m-7.25 3h1.5v-1.75H11v-1.5H9.25V8h-1.5v1.75H6v1.5h1.75z"></svg:path>`,
})
export class MaterialSymbolsSportsEsportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsEsportsOutlineIcon],svg[material-symbols-sports-esports-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.55 19q-1.275 0-1.975-.888T2.05 15.95l1.05-7.5q.225-1.5 1.338-2.475T7.05 5h9.9q1.5 0 2.613.975T20.9 8.45l1.05 7.5q.175 1.275-.525 2.163T19.45 19q-.525 0-.975-.187t-.825-.563L15.4 16H8.6l-2.25 2.25q-.375.375-.825.563T4.55 19m.4-2.15L7.8 14h8.4l2.85 2.85q.05.05.4.15q.275 0 .438-.162T20 16.4l-1.1-7.7q-.1-.725-.65-1.212T16.95 7h-9.9q-.75 0-1.3.488T5.1 8.7L4 16.4q-.05.275.113.438T4.55 17q.05 0 .4-.15M17 13q.425 0 .713-.287T18 12t-.288-.712T17 11t-.712.288T16 12t.288.713T17 13m-2-3q.425 0 .713-.288T16 9t-.288-.712T15 8t-.712.288T14 9t.288.713T15 10m-7.25 3h1.5v-1.75H11v-1.5H9.25V8h-1.5v1.75H6v1.5h1.75zM12 12"></svg:path>`,
})
export class MaterialSymbolsSportsEsportsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsEsportsOutlineRoundedIcon],svg[material-symbols-sports-esports-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.55 19q-1.275 0-1.975-.888T2.05 15.95l1.05-7.5q.225-1.5 1.338-2.475T7.05 5h9.9q1.5 0 2.613.975T20.9 8.45l1.05 7.5q.175 1.275-.525 2.163T19.45 19q-.525 0-.975-.187t-.825-.563L15.4 16H8.6l-2.25 2.25q-.375.375-.825.563T4.55 19m.4-2.15L7.8 14h8.4l2.85 2.85q.05.05.4.15q.275 0 .438-.162T20 16.4l-1.1-7.7q-.1-.725-.65-1.212T16.95 7h-9.9q-.75 0-1.3.488T5.1 8.7L4 16.4q-.05.275.113.438T4.55 17q.05 0 .4-.15M17 13q.425 0 .713-.287T18 12t-.288-.712T17 11t-.712.288T16 12t.288.713T17 13m-2-3q.425 0 .713-.288T16 9t-.288-.712T15 8t-.712.288T14 9t.288.713T15 10m-7.25 1.25v1q0 .325.213.538T8.5 13t.538-.213t.212-.537v-1h1q.325 0 .538-.213T11 10.5t-.213-.537t-.537-.213h-1v-1q0-.325-.213-.537T8.5 8t-.537.213t-.213.537v1h-1q-.325 0-.537.213T6 10.5t.213.538t.537.212z"></svg:path>`,
})
export class MaterialSymbolsSportsEsportsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsEsportsOutlineSharpIcon],svg[material-symbols-sports-esports-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.625 19l1.95-14h16.85l1.95 14H18.4l-3-3H8.6l-3 3zM4.8 17l3-3h8.425l3 3h.875L18.65 7H5.35L3.925 17zM17 13q.425 0 .713-.288T18 12t-.288-.712T17 11t-.712.288T16 12t.288.713T17 13m-2-3q.425 0 .713-.288T16 9t-.288-.712T15 8t-.712.288T14 9t.288.713T15 10m-7.25 3h1.5v-1.75H11v-1.5H9.25V8h-1.5v1.75H6v1.5h1.75zm4.275-1"></svg:path>`,
})
export class MaterialSymbolsSportsEsportsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsEsportsRoundedIcon],svg[material-symbols-sports-esports-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.55 19q-1.275 0-1.975-.888T2.05 15.95l1.05-7.5q.225-1.5 1.338-2.475T7.05 5h9.9q1.5 0 2.613.975T20.9 8.45l1.05 7.5q.175 1.275-.525 2.163T19.45 19q-.525 0-.975-.187t-.825-.563L15.4 16H8.6l-2.25 2.25q-.375.375-.825.563T4.55 19M17 13q.425 0 .713-.288T18 12t-.288-.712T17 11t-.712.288T16 12t.288.713T17 13m-2-3q.425 0 .713-.288T16 9t-.288-.712T15 8t-.712.288T14 9t.288.713T15 10m-7.25 1.25v1q0 .325.213.538T8.5 13t.538-.213t.212-.537v-1h1q.325 0 .538-.213T11 10.5t-.213-.537t-.537-.213h-1v-1q0-.325-.213-.537T8.5 8t-.537.213t-.213.537v1h-1q-.325 0-.537.213T6 10.5t.213.538t.537.212z"></svg:path>`,
})
export class MaterialSymbolsSportsEsportsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsEsportsSharpIcon],svg[material-symbols-sports-esports-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.625 19l1.95-14h16.85l1.95 14H18.4l-3-3H8.6l-3 3zM17 13q.425 0 .713-.288T18 12t-.288-.712T17 11t-.712.288T16 12t.288.713T17 13m-2-3q.425 0 .713-.288T16 9t-.288-.712T15 8t-.712.288T14 9t.288.713T15 10m-7.25 3h1.5v-1.75H11v-1.5H9.25V8h-1.5v1.75H6v1.5h1.75z"></svg:path>`,
})
export class MaterialSymbolsSportsEsportsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsFootballIcon],svg[material-symbols-sports-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.075 20.975q-1.175.125-2.837-.062T3.7 20.3q-.35-.8-.587-2.5T3 14.9zm2.375-.4l-8.05-8.05q.425-1.875 1.238-3.412t1.887-2.638Q7.6 5.4 9.138 4.613t3.312-1.188l8.1 8.1q-.4 1.85-1.175 3.4t-1.85 2.625q-1.125 1.1-2.687 1.888t-3.388 1.137M9.4 16L16 9.4L14.6 8L8 14.6zm11.55-6.85l-6.075-6.125q1.2-.15 2.95.05T20.3 3.7q.45 1 .625 2.588t.025 2.862"></svg:path>`,
})
export class MaterialSymbolsSportsFootballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsFootballOutlineIcon],svg[material-symbols-sports-football-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.05 18.95l-4-4q-.075.95-.037 1.975T5.2 18.75q.575.175 1.738.225t2.112-.025m2.4-.4q1.475-.325 2.65-.925t2.05-1.475q.85-.85 1.45-2.012t.95-2.638L12.5 5.45q-1.425.35-2.575.963T7.9 7.9T6.413 9.938T5.45 12.55zM9.9 15.5l-1.4-1.4l5.6-5.6l1.4 1.4zm9.05-6.4q.1-.975.063-2.025T18.8 5.25q-.575-.2-1.737-.25t-2.113.05zM7.75 21q-1.425 0-2.6-.213T3.7 20.3q-.275-.3-.488-1.5T3 16.15q0-2.975.9-5.512T6.45 6.45t4.225-2.55T16.25 3q1.45 0 2.613.213T20.3 3.7q.275.3.488 1.5T21 7.9q0 2.925-.9 5.463t-2.55 4.187q-1.625 1.625-4.2 2.538T7.75 21"></svg:path>`,
})
export class MaterialSymbolsSportsFootballOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsFootballOutlineRoundedIcon],svg[material-symbols-sports-football-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.05 18.95l-4-4q-.075.95-.037 1.975T5.2 18.75q.575.175 1.738.225t2.112-.025m2.4-.4q1.475-.325 2.65-.925t2.05-1.475q.85-.85 1.45-2.012t.95-2.638L12.5 5.45q-1.425.35-2.575.963T7.9 7.9T6.413 9.938T5.45 12.55zm7.5-9.45q.1-.975.063-2.025T18.8 5.25q-.575-.2-1.737-.25t-2.113.05zM7.75 21q-1.425 0-2.6-.213T3.7 20.3q-.275-.3-.488-1.5T3 16.15q0-2.975.9-5.512T6.45 6.45t4.225-2.55T16.25 3q1.45 0 2.613.213T20.3 3.7q.275.3.488 1.5T21 7.9q0 2.925-.9 5.463t-2.55 4.187q-1.625 1.625-4.2 2.538T7.75 21m1.45-7.6l4.2-4.2q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.2 4.2q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7"></svg:path>`,
})
export class MaterialSymbolsSportsFootballOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsFootballRoundedIcon],svg[material-symbols-sports-football-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.075 20.975q-1.175.125-2.837-.062T3.7 20.3q-.35-.8-.587-2.5T3 14.9zm2.375-.4l-8.05-8.05q.425-1.875 1.238-3.412t1.887-2.638Q7.6 5.4 9.138 4.613t3.312-1.188l8.1 8.1q-.4 1.85-1.175 3.4t-1.85 2.625q-1.125 1.1-2.687 1.888t-3.388 1.137M10.1 15.3l5.2-5.2q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275l-5.2 5.2q-.275.275-.275.7t.275.7t.7.275t.7-.275m10.85-6.15l-6.075-6.125q1.2-.15 2.95.05T20.3 3.7q.45 1 .625 2.588t.025 2.862"></svg:path>`,
})
export class MaterialSymbolsSportsFootballRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsGolfIcon],svg[material-symbols-sports-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16q-2.925 0-4.962-2.037T5 9t2.038-4.962T12 2t4.963 2.038T19 9t-2.037 4.963T12 16m-2-7q.425 0 .713-.288T11 8t-.288-.712T10 7t-.712.288T9 8t.288.713T10 9m4 0q.425 0 .713-.288T15 8t-.288-.712T14 7t-.712.288T13 8t.288.713T14 9m-2-2q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m-1 15v-1q0-.825-.587-1.412T9 19H7v-2h10v2h-2q-.825 0-1.412.588T13 21v1z"></svg:path>`,
})
export class MaterialSymbolsSportsGolfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsGolfOutlineIcon],svg[material-symbols-sports-golf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16q-2.925 0-4.962-2.037T5 9t2.038-4.962T12 2t4.963 2.038T19 9t-2.037 4.963T12 16m0-2q2.075 0 3.538-1.463T17 9t-1.463-3.537T12 4T8.463 5.463T7 9t1.463 3.538T12 14m-2-5q.425 0 .713-.288T11 8t-.288-.712T10 7t-.712.288T9 8t.288.713T10 9m4 0q.425 0 .713-.288T15 8t-.288-.712T14 7t-.712.288T13 8t.288.713T14 9m-2-2q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m-1 15v-1q0-.825-.587-1.412T9 19H7v-2h10v2h-2q-.825 0-1.412.588T13 21v1zm1-13"></svg:path>`,
})
export class MaterialSymbolsSportsGolfOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsGolfOutlineRoundedIcon],svg[material-symbols-sports-golf-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16q-2.925 0-4.962-2.037T5 9t2.038-4.962T12 2t4.963 2.038T19 9t-2.037 4.963T12 16m0-2q2.075 0 3.538-1.463T17 9t-1.463-3.537T12 4T8.463 5.463T7 9t1.463 3.538T12 14m-2-5q.425 0 .713-.288T11 8t-.288-.712T10 7t-.712.288T9 8t.288.713T10 9m4 0q.425 0 .713-.288T15 8t-.288-.712T14 7t-.712.288T13 8t.288.713T14 9m-2-2q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m-1 15v-1q0-.825-.587-1.412T9 19H8q-.425 0-.712-.288T7 18t.288-.712T8 17h8q.425 0 .713.288T17 18t-.288.713T16 19h-1q-.825 0-1.412.588T13 21v1zm1-13"></svg:path>`,
})
export class MaterialSymbolsSportsGolfOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsGolfRoundedIcon],svg[material-symbols-sports-golf-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16q-2.925 0-4.962-2.037T5 9t2.038-4.962T12 2t4.963 2.038T19 9t-2.037 4.963T12 16m-2-7q.425 0 .713-.288T11 8t-.288-.712T10 7t-.712.288T9 8t.288.713T10 9m4 0q.425 0 .713-.288T15 8t-.288-.712T14 7t-.712.288T13 8t.288.713T14 9m-2-2q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m-1 15v-1q0-.825-.587-1.412T9 19H8q-.425 0-.712-.288T7 18t.288-.712T8 17h8q.425 0 .713.288T17 18t-.288.713T16 19h-1q-.825 0-1.412.588T13 21v1z"></svg:path>`,
})
export class MaterialSymbolsSportsGolfRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsGymnasticsIcon],svg[material-symbols-sports-gymnastics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l-.5-10L8 11H1V9h6l7-5l1.3 1.525L11.15 8.5H14L21.8 4L23 5.4L14.5 12L14 22zM6 8q-.825 0-1.412-.587T4 6t.588-1.412T6 4t1.413.588T8 6t-.587 1.413T6 8"></svg:path>`,
})
export class MaterialSymbolsSportsGymnasticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsGymnasticsRoundedIcon],svg[material-symbols-sports-gymnastics-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.95 21.05L11.5 12L8 11H2q-.425 0-.712-.288T1 10t.288-.712T2 9h5l6.25-4.475q.325-.225.7-.175t.65.35q.275.35.225.762t-.4.688L11.15 8.5H14l7.15-4.125q.275-.175.613-.1t.612.4q.275.3.225.688T22.225 6L14.5 12l-.45 9.05q-.025.4-.325.675T12.95 22q-.4 0-.687-.275t-.313-.675M6 8q-.825 0-1.412-.587T4 6t.588-1.412T6 4t1.413.588T8 6t-.587 1.413T6 8"></svg:path>`,
})
export class MaterialSymbolsSportsGymnasticsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsHandballIcon],svg[material-symbols-sports-handball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.2 23.9l-1.75-1l3-5.2l-1.7-1l-1.5 2.6l-1.75-1l5.15-8.9q-.95-.975-1.425-2.225T8.75 4.6q0-.9.225-1.787T9.7 1.1l1.7 1q-.35.575-.5 1.188t-.15 1.262q0 1.325.65 2.488T13.25 8.9l2.25 1.3q1.55.9 2.275 2.588t.725 3.162q0 .95-.25 1.85t-.7 1.7l-1.75-1q.35-.6.5-1.225T16.45 16q0-.8-.225-1.55t-.725-1.4zM16 9q-.825 0-1.412-.587T14 7t.588-1.412T16 5t1.413.588T18 7t-.587 1.413T16 9m-2.5-5q-.65 0-1.075-.45T12 2.5q0-.65.45-1.075T13.5 1q.65 0 1.075.45T15 2.5q0 .65-.45 1.075T13.5 4"></svg:path>`,
})
export class MaterialSymbolsSportsHandballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsHandballRoundedIcon],svg[material-symbols-sports-handball-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.75 16.7l-1 1.725q-.2.35-.612.463t-.763-.088t-.462-.612t.087-.763L10.65 9.4q-.95-.975-1.425-2.225T8.75 4.6q0-.65.113-1.312T9.25 2q.15-.375.55-.488t.75.088t.463.6T11 3q-.125.375-.187.763t-.063.787q0 1.325.65 2.488T13.25 8.9l2.25 1.3q1.55.9 2.275 2.588t.725 3.162q0 .675-.125 1.338T18 18.575q-.15.4-.55.513T16.675 19q-.35-.2-.475-.6t0-.825q.125-.4.188-.788T16.45 16q0-.8-.225-1.55t-.725-1.4l-5.8 9.975q-.2.35-.612.463t-.763-.088t-.462-.612t.087-.763l2.5-4.325zM16 9q-.825 0-1.412-.587T14 7t.588-1.412T16 5t1.413.588T18 7t-.587 1.413T16 9m-2.5-5q-.65 0-1.075-.45T12 2.5q0-.65.45-1.075T13.5 1q.65 0 1.075.45T15 2.5q0 .65-.45 1.075T13.5 4"></svg:path>`,
})
export class MaterialSymbolsSportsHandballRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsHockeyIcon],svg[material-symbols-sports-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-3q0-.425.288-.712T3 16h1v4zm3 0v-4h4l.85-1.95l1.6 3.5l-.85 1.9q-.125.275-.375.413T9.7 20zm15 0v-4h1q.425 0 .713.288T22 17v3zm-1 0h-4.7q-.275 0-.525-.137t-.375-.413L6.35 4H9.7L12 9.2L14.3 4h3.35l-4.05 8.85L15 16h4z"></svg:path>`,
})
export class MaterialSymbolsSportsHockeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsHockeyRoundedIcon],svg[material-symbols-sports-hockey-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19v-2q0-.425.288-.712T3 16h1v4H3q-.425 0-.712-.288T2 19m3 1v-4h4l.85-1.95l1.6 3.5l-.85 1.9q-.125.275-.375.413T9.7 20zm17-1q0 .425-.288.713T21 20h-1v-4h1q.425 0 .713.288T22 17zm-3 1h-4.7q-.275 0-.525-.137t-.375-.413L7.325 6.15q-.35-.75.1-1.45T8.7 4q.45 0 .825.238t.575.662L12 9.2l1.9-4.3q.2-.425.562-.663T15.276 4q.825 0 1.288.7t.112 1.45l-3.075 6.7L15 16h4z"></svg:path>`,
})
export class MaterialSymbolsSportsHockeyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsHockeySharpIcon],svg[material-symbols-sports-hockey-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-4h2v4zm3 0v-4h4l.85-1.95l1.6 3.5l-1.1 2.45zm15 0v-4h2v4zm-1 0h-5.35L6.35 4H9.7L12 9.2L14.3 4h3.35l-4.05 8.85L15 16h4z"></svg:path>`,
})
export class MaterialSymbolsSportsHockeySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsKabaddiIcon],svg[material-symbols-sports-kabaddi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.425 22l-1.4-1.4l3.65-3.65l-1.1-2.95q-.175-.45-.075-1.037t.575-1.063l3.3-3.3q.3-.3.65-.45T7.8 8t.775.15t.65.45l2 1.95q.675.675 1.65 1.063t2.1.387v2q-1.5 0-2.8-.475T9.925 12.1l-.7-.7l-2.35 2.35l2.1 2.15V22h-2v-5.25l-1.3-1.2v2.2zm13.55 0v-7l2.1-2l-.6-3.5q-.375.45-.825.8t-.975.65q-.825-.05-1.562-.35t-1.238-.8q1.125-.2 1.988-.763T15.275 7.6l1-1.6q.425-.675 1.175-.913t1.475.063l5.05 2.15V12h-2V8.6l-1.8-.7l2.8 14.1h-2.1l-1.8-7.5l-2.1 2V22zm-3.5-13.5q-.825 0-1.412-.587T9.475 6.5t.588-1.412t1.412-.588t1.413.588t.587 1.412t-.587 1.413t-1.413.587m5-4q-.825 0-1.412-.587T14.475 2.5t.588-1.412T16.475.5t1.413.588t.587 1.412t-.587 1.413t-1.413.587"></svg:path>`,
})
export class MaterialSymbolsSportsKabaddiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsKabaddiRoundedIcon],svg[material-symbols-sports-kabaddi-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.675 15.55v1.775q0 .2-.075.388t-.225.337l-3.25 3.25q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.95-2.95l-1.1-2.95q-.175-.45-.075-1.037t.575-1.063l3.3-3.3q.3-.3.65-.45T7.8 8t.775.15t.65.45l2 1.95q.675.675 1.65 1.063t2.1.387v2q-1.5 0-2.8-.475T9.925 12.1l-.7-.7l-2.35 2.35L8.7 15.6q.125.125.2.313t.075.387V21q0 .425-.287.713T7.975 22t-.712-.288T6.975 21v-4.25zm11.3.95V21q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712v-5.575q0-.2.075-.387t.225-.338l1.8-1.7l-.6-3.5q-.375.45-.825.8t-.975.65q-.825-.05-1.563-.35t-1.237-.8q1.125-.2 1.988-.763T15.275 7.6l1-1.6q.425-.675 1.175-.913t1.475.063l4.45 1.9q.275.125.438.363t.162.537V11q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V8.6l-1.8-.7l2.55 12.875q.1.475-.213.85t-.837.375q-.35 0-.638-.213t-.362-.562l-1.6-6.725zm-5.5-8q-.825 0-1.412-.587T9.475 6.5t.588-1.412t1.412-.588t1.413.588t.587 1.412t-.587 1.413t-1.413.587m5-4q-.825 0-1.412-.587T14.475 2.5t.588-1.412T16.475.5t1.413.588t.587 1.412t-.587 1.413t-1.413.587"></svg:path>`,
})
export class MaterialSymbolsSportsKabaddiRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsKabaddiSharpIcon],svg[material-symbols-sports-kabaddi-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.425 22l-1.4-1.4l3.65-3.65l-1.525-4.125L6.375 8.6q.3-.3.65-.45T7.8 8t.775.15t.65.45l2 1.95q.675.675 1.65 1.063t2.1.387v2q-1.5 0-2.8-.475T9.925 12.1l-.7-.7l-2.35 2.35l2.1 2.15V22h-2v-5.25l-1.3-1.2v2.2zm13.55 0v-7l2.1-2l-.6-3.5q-.375.45-.825.8t-.975.65q-.825-.05-1.562-.35t-1.238-.8q1.125-.2 1.988-.763T15.275 7.6l1-1.6q.425-.675 1.175-.913t1.475.063l5.05 2.15V12h-2V8.6l-1.8-.7l2.8 14.1h-2.1l-1.8-7.5l-2.1 2V22zm-3.5-13.5q-.825 0-1.412-.587T9.475 6.5t.588-1.412t1.412-.588t1.413.588t.587 1.412t-.587 1.413t-1.413.587m5-4q-.825 0-1.412-.587T14.475 2.5t.588-1.412T16.475.5t1.413.588t.587 1.412t-.587 1.413t-1.413.587"></svg:path>`,
})
export class MaterialSymbolsSportsKabaddiSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMartialArtsIcon],svg[material-symbols-sports-martial-arts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 22l-.5-9l-3.175-1.825l-.35 1.3L8 16l-1.725 1L3.8 12.75L5 8.45l5.75-3.3L8 2.4L9.4 1L14 5.575L10.4 7.65l1.2 1.05L19.8 2L21 3.4L12.5 12L12 22zM5 7q-.825 0-1.412-.587T3 5t.588-1.412T5 3t1.413.588T7 5t-.587 1.413T5 7"></svg:path>`,
})
export class MaterialSymbolsSportsMartialArtsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMartialArtsRoundedIcon],svg[material-symbols-sports-martial-arts-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 12l-.45 9.05q-.025.4-.312.675T10.95 22q-.4 0-.687-.275t-.313-.675L9.5 13l-3.175-1.825l-.35 1.3L7.5 15.15q.2.35.088.75t-.463.6t-.75.1t-.6-.45l-1.75-3.025q-.1-.175-.125-.375t.025-.4L5 8.45l5.75-3.3L8.7 3.1q-.275-.275-.288-.687T8.7 1.7q.275-.275.7-.275t.7.275l2.975 2.95q.35.35.288.838t-.488.737L10.4 7.65l1.2 1.05l7.5-6.125q.275-.25.663-.212t.687.387q.225.275.213.625T20.4 4zM5 7q-.825 0-1.412-.587T3 5t.588-1.412T5 3t1.413.588T7 5t-.587 1.413T5 7"></svg:path>`,
})
export class MaterialSymbolsSportsMartialArtsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMmaIcon],svg[material-symbols-sports-mma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21q-.425 0-.712-.288T7 20v-3h10v3q0 .425-.288.713T16 21zM19 8v3q0 .075-.05.2L18.2 15q-.075.45-.413.725T17 16H7q-.45 0-.788-.275T5.8 15l-.75-3.8Q5 11.075 5 11V5q0-.825.588-1.412T7 3h8q.825 0 1.413.588T17 5v3q0-.425.288-.712T18 7t.713.288T19 8M8 10h6V7H8z"></svg:path>`,
})
export class MaterialSymbolsSportsMmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMmaOutlineIcon],svg[material-symbols-sports-mma-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21q-.425 0-.712-.288T7 20v-3h10v3q0 .425-.288.713T16 21zM19 8v3q0 .075-.05.2L18.2 15q-.075.45-.413.725T17 16H7q-.45 0-.788-.275T5.8 15l-.75-3.8Q5 11.075 5 11V5q0-.825.588-1.412T7 3h8q.825 0 1.413.588T17 5v3q0-.425.288-.712T18 7t.713.288T19 8M7.65 14h8.7l.65-3.4V10h-2V5H7v5.6zM8 10h6V7H8zm4-.5"></svg:path>`,
})
export class MaterialSymbolsSportsMmaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMmaOutlineRoundedIcon],svg[material-symbols-sports-mma-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21q-.425 0-.712-.288T7 20v-3h10v3q0 .425-.288.713T16 21zM19 8v3q0 .075-.05.2L18.2 15q-.075.45-.413.725T17 16H7q-.45 0-.788-.275T5.8 15l-.75-3.8Q5 11.075 5 11V5q0-.825.588-1.412T7 3h8q.825 0 1.413.588T17 5v3q0-.425.288-.712T18 7t.713.288T19 8M7.65 14h8.7l.65-3.4V10h-2V5H7v5.6zm1.85-4h3q.625 0 1.063-.437T14 8.5t-.437-1.062T12.5 7h-3q-.625 0-1.062.438T8 8.5t.438 1.063T9.5 10"></svg:path>`,
})
export class MaterialSymbolsSportsMmaOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMmaOutlineSharpIcon],svg[material-symbols-sports-mma-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21v-4h10v4zm-1-5l-1-5.05V3h12v4h2v3.95L18 16zm1.65-2h8.7l.65-3.4V10h-2V5H7v5.6zM8 10h6V7H8zm4-.5"></svg:path>`,
})
export class MaterialSymbolsSportsMmaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMmaRoundedIcon],svg[material-symbols-sports-mma-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21q-.425 0-.712-.288T7 20v-3h10v3q0 .425-.288.713T16 21zM19 8v3q0 .075-.05.2L18.2 15q-.075.45-.413.725T17 16H7q-.45 0-.788-.275T5.8 15l-.75-3.8Q5 11.075 5 11V5q0-.825.588-1.412T7 3h8q.825 0 1.413.588T17 5v3q0-.425.288-.712T18 7t.713.288T19 8m-9.5 2h3q.625 0 1.063-.437T14 8.5t-.437-1.062T12.5 7h-3q-.625 0-1.062.438T8 8.5t.438 1.063T9.5 10"></svg:path>`,
})
export class MaterialSymbolsSportsMmaRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMmaSharpIcon],svg[material-symbols-sports-mma-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21v-4h10v4zm-1-5l-1-5.05V3h12v4h2v3.95L18 16zm2-6h6V7H8z"></svg:path>`,
})
export class MaterialSymbolsSportsMmaSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMotorsportsIcon],svg[material-symbols-sports-motorsports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.475 19.45H2.4q-.125 0-.225-.1t-.1-.225q0-1.175.038-2.062t.112-1.588h7.85q1.725 0 2.938-1.225t1.212-3q0-1.275-.712-2.312T11.6 7.4L8.25 6.075q1.35-.75 2.838-1.137t3.087-.388q3.2 0 5.475 2.163T21.925 12t-2.162 5.288t-5.288 2.162M2.55 13.5q.5-1.775 1.475-3.338T6.35 7.4l4.5 1.825q.65.275 1.025.825t.375 1.2q0 .95-.637 1.6t-1.588.65z"></svg:path>`,
})
export class MaterialSymbolsSportsMotorsportsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMotorsportsOutlineIcon],svg[material-symbols-sports-motorsports-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18q2.5 0 4.25-1.75T20 12q0-2.525-1.838-4.262T13.75 6q-1.2 0-2.325.275T9.25 7.1l2.5 1q1.025.425 1.638 1.313T14 11.4q0 1.5-1.037 2.55T10.45 15h-6.4Q4 15.6 4 16.363V18zm-9.6-5h6q.675 0 1.138-.462T12 11.4q0-.475-.262-.862T11 9.95l-3.7-1.5q-1.05.925-1.787 2.1T4.4 13m9.6 7H4q-.825 0-1.412-.587T2 18v-2.25q0-2.45.925-4.587t2.513-3.726t3.737-2.512T13.75 4q1.7 0 3.2.625t2.625 1.713t1.775 2.537T22 12q0 1.65-.625 3.113t-1.713 2.55t-2.55 1.712T14 20"></svg:path>`,
})
export class MaterialSymbolsSportsMotorsportsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMotorsportsOutlineSharpIcon],svg[material-symbols-sports-motorsports-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18q2.5 0 4.25-1.75T20 12q0-2.525-1.838-4.262T13.75 6q-1.2 0-2.325.275T9.25 7.1l2.5 1q1.025.425 1.638 1.313T14 11.4q0 1.5-1.037 2.55T10.45 15h-6.4Q4 15.6 4 16.363V18zm-9.6-5h6q.675 0 1.138-.462T12 11.4q0-.475-.262-.862T11 9.95l-3.7-1.5q-1.05.925-1.787 2.1T4.4 13m9.6 7H2v-4.25q0-2.45.925-4.587t2.513-3.726t3.737-2.512T13.75 4q1.7 0 3.2.625t2.625 1.713t1.775 2.537T22 12q0 1.65-.625 3.113t-1.713 2.55t-2.55 1.712T14 20"></svg:path>`,
})
export class MaterialSymbolsSportsMotorsportsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsMotorsportsSharpIcon],svg[material-symbols-sports-motorsports-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.075 19.45v-.325q0-1.175.038-2.062t.112-1.588h7.85q1.725 0 2.938-1.225t1.212-3q0-1.275-.712-2.312T11.6 7.4L8.25 6.075q1.35-.75 2.838-1.137t3.087-.388q3.2 0 5.475 2.163T21.925 12t-2.162 5.288t-5.288 2.162zm.475-5.95q.5-1.775 1.475-3.337T6.35 7.4l4.5 1.825q.65.275 1.025.825t.375 1.2q0 .95-.637 1.6t-1.588.65z"></svg:path>`,
})
export class MaterialSymbolsSportsMotorsportsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsOutlineIcon],svg[material-symbols-sports-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19q-2.5 0-4.25-1.75T5 13q0-.275.025-.55t.075-.55q-.125.05-.3.075T4.5 12q-1.05 0-1.775-.725T2 9.5t.688-1.775T4.425 7q.825 0 1.488.462T6.85 8.65q.825-.75 1.888-1.2T11 7h11v4h-5v2q0 2.5-1.75 4.25T11 19m-6.5-8.5q.425 0 .713-.288T5.5 9.5t-.288-.712T4.5 8.5t-.712.288T3.5 9.5t.288.713t.712.287m6.5 6q1.45 0 2.475-1.025T14.5 13t-1.025-2.475T11 9.5t-2.475 1.025T7.5 13t1.025 2.475T11 16.5m0-1.5q.825 0 1.413-.587T13 13t-.587-1.412T11 11t-1.412.588T9 13t.588 1.413T11 15m0-2"></svg:path>`,
})
export class MaterialSymbolsSportsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsOutlineRoundedIcon],svg[material-symbols-sports-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19q-2.5 0-4.25-1.75T5 13q0-.275.025-.55t.075-.55q-.125.05-.3.075T4.5 12q-1.05 0-1.775-.725T2 9.5t.688-1.775T4.425 7q.825 0 1.488.462T6.85 8.65q.825-.75 1.888-1.2T11 7h10q.425 0 .713.288T22 8v2q0 .425-.288.713T21 11h-4v2q0 2.5-1.75 4.25T11 19m-6.5-8.5q.425 0 .713-.288T5.5 9.5t-.288-.712T4.5 8.5t-.712.288T3.5 9.5t.288.713t.712.287m6.5 6q1.45 0 2.475-1.025T14.5 13t-1.025-2.475T11 9.5t-2.475 1.025T7.5 13t1.025 2.475T11 16.5m0-1.5q.825 0 1.413-.587T13 13t-.587-1.412T11 11t-1.412.588T9 13t.588 1.413T11 15m0-2"></svg:path>`,
})
export class MaterialSymbolsSportsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsRoundedIcon],svg[material-symbols-sports-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19q-2.5 0-4.25-1.75T5 13q0-.275.025-.55t.075-.55q-.125.05-.3.075T4.5 12q-1.05 0-1.775-.725T2 9.5t.688-1.775T4.425 7q.825 0 1.488.462T6.85 8.65q.825-.75 1.888-1.2T11 7h10q.425 0 .713.288T22 8v2q0 .425-.288.713T21 11h-4v2q0 2.5-1.75 4.25T11 19m-6.5-8.5q.425 0 .713-.288T5.5 9.5t-.288-.712T4.5 8.5t-.712.288T3.5 9.5t.288.713t.712.287M11 15q.825 0 1.413-.587T13 13t-.587-1.412T11 11t-1.412.588T9 13t.588 1.413T11 15"></svg:path>`,
})
export class MaterialSymbolsSportsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsRugbyIcon],svg[material-symbols-sports-rugby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.65 21.5q-1.425 0-2.575-.225T3.45 20.55q-.45-.475-.7-1.65t-.25-2.65q0-2.875 1.013-5.512T6.3 6.3q1.775-1.775 4.438-2.787T16.35 2.5q1.425 0 2.575.225t1.625.725q.45.475.7 1.65t.25 2.65q0 2.875-1.012 5.513T17.7 17.7q-1.775 1.775-4.437 2.788T7.65 21.5m-3.1-5.65q.825-1.8 2-3.512t2.6-3.188q1.425-1.425 3.138-2.6t3.512-2q-2.275.075-4.462.938T7.75 7.75q-1.475 1.425-2.312 3.575T4.55 15.85m3.65 3.6q2.275-.075 4.463-.937t3.587-2.263q1.475-1.425 2.313-3.575t.887-4.525q-.825 1.8-2 3.513t-2.6 3.187q-1.425 1.425-3.137 2.6t-3.513 2"></svg:path>`,
})
export class MaterialSymbolsSportsRugbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsRugbyOutlineIcon],svg[material-symbols-sports-rugby-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.65 21.5q-1.425 0-2.575-.225T3.45 20.55q-.45-.475-.7-1.65t-.25-2.65q0-2.875 1.013-5.512T6.3 6.3q1.775-1.775 4.438-2.787T16.35 2.5q1.425 0 2.575.225t1.625.725q.45.475.7 1.65t.25 2.65q0 2.875-1.012 5.513T17.7 17.7q-1.775 1.775-4.437 2.788T7.65 21.5m-3.1-5.65q.825-1.8 2-3.512t2.6-3.188q1.425-1.425 3.138-2.6t3.512-2q-2.275.075-4.462.938T7.75 7.75q-1.475 1.425-2.312 3.575T4.55 15.85m3.65 3.6q2.275-.075 4.463-.937t3.587-2.263q1.475-1.425 2.313-3.575t.887-4.525q-.825 1.8-1.987 3.513T14.85 14.85q-1.425 1.425-3.137 2.6t-3.513 2M5.7 18.3q2-.675 4.075-2t3.625-2.9q1.65-1.625 2.975-3.7t1.925-4q-2 .675-4.075 2T10.6 10.6q-1.65 1.625-2.975 3.7t-1.925 4M12 12"></svg:path>`,
})
export class MaterialSymbolsSportsRugbyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsScoreIcon],svg[material-symbols-sports-score-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h2V4H9zm4 0V4h2v2zm-4 8v-2h2v2zm8-4V8h2v2zm0 4v-2h2v2zm-4 0v-2h2v2zm4-8V4h2v2zm-6 2V6h2v2zM5 20V4h2v2h2v2H7v2h2v2H7v8zm10-8v-2h2v2zm-4 0v-2h2v2zm-2-2V8h2v2zm4 0V8h2v2zm2-2V6h2v2z"></svg:path>`,
})
export class MaterialSymbolsSportsScoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsScoreRoundedIcon],svg[material-symbols-sports-score-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h2V4H9zm4 0V4h2v2zm-4 8v-2h2v2zm8-4V8h2v2zm0 4v-2h2v2zm-4 0v-2h2v2zm4-8V4h2v2zm-6 2V6h2v2zM6 20q-.425 0-.712-.288T5 19V5q0-.425.288-.712T6 4t.713.288T7 5v1h2v2H7v2h2v2H7v7q0 .425-.288.713T6 20m9-8v-2h2v2zm-4 0v-2h2v2zm-2-2V8h2v2zm4 0V8h2v2zm2-2V6h2v2z"></svg:path>`,
})
export class MaterialSymbolsSportsScoreRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsSoccerIcon],svg[material-symbols-sports-soccer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m5-12.5l1.35-.45l.4-1.35q-.8-1.2-1.925-2.062T14.35 4.35L13 5.3v1.4zm-10 0l4-2.8V5.3l-1.35-.95q-1.35.425-2.475 1.287T5.25 7.7l.4 1.35zm-1.05 7.7l1.15-.1l.75-1.35L6.4 11.4L5 10.9l-1 .75q0 1.625.45 2.962t1.5 2.588M12 20q.65 0 1.275-.1t1.225-.3l.7-1.5l-.65-1.1h-5.1l-.65 1.1l.7 1.5q.6.2 1.225.3T12 20m-2.25-5h4.5l1.4-4L12 8.45L8.4 11zm8.3 2.2q1.05-1.25 1.5-2.587T20 11.65l-1-.7l-1.4.45l-1.45 4.35l.75 1.35z"></svg:path>`,
})
export class MaterialSymbolsSportsSoccerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsTennisIcon],svg[material-symbols-sports-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.425 20L2 18.6l4.1-4.1q.775-.775 1.063-1.937T7.45 9q0-1.45.65-2.85t1.85-2.6q2.275-2.275 5.025-2.575T19.5 2.5q1.8 1.8 1.5 4.55t-2.55 5q-1.2 1.2-2.6 1.85t-2.85.65q-2.425 0-3.55.275T7.525 15.9zm6.875-8.35q1.175 1.15 3.175.85t3.575-1.875q1.6-1.6 1.913-3.588T18.1 3.925q-1.2-1.2-3.137-.9t-3.563 1.9Q9.825 6.5 9.488 8.488t.812 3.162M18 23q-1.65 0-2.825-1.175T14 19t1.175-2.825T18 15t2.825 1.175T22 19t-1.175 2.825T18 23"></svg:path>`,
})
export class MaterialSymbolsSportsTennisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsTennisOutlineIcon],svg[material-symbols-sports-tennis-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.425 20L2 18.6l4.1-4.1q.775-.775 1.063-1.937T7.45 9q0-1.45.65-2.85t1.85-2.6q2.275-2.275 5.025-2.575T19.5 2.5q1.8 1.8 1.5 4.55t-2.55 5q-1.2 1.2-2.6 1.85t-2.85.65q-2.425 0-3.55.275T7.525 15.9zm6.875-8.35q1.175 1.15 3.175.85t3.575-1.875q1.6-1.6 1.913-3.588T18.1 3.925q-1.2-1.2-3.137-.9t-3.563 1.9Q9.825 6.5 9.488 8.488t.812 3.162M18 23q-1.65 0-2.825-1.175T14 19t1.175-2.825T18 15t2.825 1.175T22 19t-1.175 2.825T18 23m0-2q.825 0 1.413-.587T20 19t-.587-1.412T18 17t-1.412.588T16 19t.588 1.413T18 21m0-2"></svg:path>`,
})
export class MaterialSymbolsSportsTennisOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsTennisOutlineRoundedIcon],svg[material-symbols-sports-tennis-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14.55q-2.425 0-3.55.275T7.525 15.9l-3.4 3.4q-.275.275-.687.275t-.713-.275q-.3-.3-.3-.712t.3-.713L6.1 14.5q.775-.775 1.063-1.937T7.45 9q0-1.45.65-2.85t1.85-2.6q2.275-2.275 5.025-2.575T19.5 2.5q1.8 1.8 1.5 4.55t-2.55 5q-1.2 1.2-2.6 1.85t-2.85.65m-2.7-2.9q1.175 1.15 3.175.85t3.575-1.875q1.6-1.6 1.913-3.588T18.1 3.925q-1.2-1.2-3.137-.9t-3.563 1.9Q9.825 6.5 9.488 8.488t.812 3.162M18 23q-1.65 0-2.825-1.175T14 19t1.175-2.825T18 15t2.825 1.175T22 19t-1.175 2.825T18 23m0-2q.825 0 1.413-.587T20 19t-.587-1.412T18 17t-1.412.588T16 19t.588 1.413T18 21m0-2"></svg:path>`,
})
export class MaterialSymbolsSportsTennisOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsTennisRoundedIcon],svg[material-symbols-sports-tennis-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14.55q-2.425 0-3.55.275T7.525 15.9l-3.4 3.4q-.275.275-.687.275t-.713-.275q-.3-.3-.3-.712t.3-.713L6.1 14.5q.775-.775 1.063-1.937T7.45 9q0-1.45.65-2.85t1.85-2.6q2.275-2.275 5.025-2.575T19.5 2.5q1.8 1.8 1.5 4.55t-2.55 5q-1.2 1.2-2.6 1.85t-2.85.65m-2.7-2.9q1.175 1.15 3.175.85t3.575-1.875q1.6-1.6 1.913-3.588T18.1 3.925q-1.2-1.2-3.137-.9t-3.563 1.9Q9.825 6.5 9.488 8.488t.812 3.162M18 23q-1.65 0-2.825-1.175T14 19t1.175-2.825T18 15t2.825 1.175T22 19t-1.175 2.825T18 23"></svg:path>`,
})
export class MaterialSymbolsSportsTennisRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsVolleyballIcon],svg[material-symbols-sports-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.6 9.2L13 4.225V2.05q3.075.3 5.4 2.263T21.6 9.2M6.75 13.9V3.5q.975-.575 2.05-.95t2.225-.5v9.375zM2.9 16.125q-.45-.95-.675-1.987T2 12q0-1.925.7-3.687T4.75 5.15v9.875zM7.3 20.8q-1.05-.5-1.9-1.25t-1.5-1.7l8.125-4.7l4.275 2.475zm4.725 1.2q-.575 0-1.175-.062t-1.15-.213l8.6-4.95l1.85 1.025q-1.425 1.95-3.562 3.075T12.025 22m9.1-5.9L13 11.425V6.5l9 5.225q0 1.15-.2 2.25t-.675 2.125"></svg:path>`,
})
export class MaterialSymbolsSportsVolleyballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsVolleyballOutlineIcon],svg[material-symbols-sports-volleyball-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.55 9.45q-.775-2.175-2.525-3.637T13 4.05v1.6zM8 13.15l3-1.75V4.05q-.8.075-1.55.363T8 5.1zM4.65 15.1L6 14.3V6.75q-.975 1.1-1.487 2.45T4 12q0 .8.163 1.588T4.65 15.1M8 18.9l7-4l-3-1.75l-6.35 3.7q.5.625 1.075 1.15T8 18.9m4 1.1q1.875 0 3.55-.85t2.8-2.35L17 16.05l-6.6 3.8q.4.075.8.112T12 20m7.35-4.9q.325-.725.488-1.513T20 12l-7-4.05v3.45zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsSportsVolleyballOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSprinklerIcon],svg[material-symbols-sprinkler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12q-.425 0-.712-.288T11 11t.288-.712T12 10t.713.288T13 11t-.288.713T12 12m0-4q-.425 0-.712-.288T11 7t.288-.712T12 6t.713.288T13 7t-.288.713T12 8m0-4q-.425 0-.712-.288T11 3t.288-.712T12 2t.713.288T13 3t-.288.713T12 4m3 10q-.425 0-.712-.288T14 13t.288-.712T15 12t.713.288T16 13t-.288.713T15 14m2.825-2.85q-.425 0-.712-.288t-.288-.712t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287m2.825-2.8q-.425 0-.712-.288t-.288-.712t.288-.712t.712-.288t.713.288t.287.712t-.287.713t-.713.287M9 14q-.425 0-.712-.288T8 13t.288-.712T9 12t.713.288T10 13t-.288.713T9 14m-2.825-2.85q-.425 0-.712-.288t-.288-.712t.288-.712t.712-.288t.713.288t.287.712t-.287.713t-.713.287M3.35 8.35q-.425 0-.712-.288T2.35 7.35t.288-.712t.712-.288t.713.288t.287.712t-.287.713t-.713.287M11 22v-4H7v-2h10v2h-4v4z"></svg:path>`,
})
export class MaterialSymbolsSprinklerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSprinklerRoundedIcon],svg[material-symbols-sprinkler-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12q-.425 0-.712-.288T11 11t.288-.712T12 10t.713.288T13 11t-.288.713T12 12m0-4q-.425 0-.712-.288T11 7t.288-.712T12 6t.713.288T13 7t-.288.713T12 8m0-4q-.425 0-.712-.288T11 3t.288-.712T12 2t.713.288T13 3t-.288.713T12 4m3 10q-.425 0-.712-.288T14 13t.288-.712T15 12t.713.288T16 13t-.288.713T15 14m2.825-2.85q-.425 0-.712-.288t-.288-.712t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287m2.825-2.8q-.425 0-.712-.288t-.288-.712t.288-.712t.712-.288t.713.288t.287.712t-.287.713t-.713.287M9 14q-.425 0-.712-.288T8 13t.288-.712T9 12t.713.288T10 13t-.288.713T9 14m-2.825-2.85q-.425 0-.712-.288t-.288-.712t.288-.712t.712-.288t.713.288t.287.712t-.287.713t-.713.287M3.35 8.35q-.425 0-.712-.288T2.35 7.35t.288-.712t.712-.288t.713.288t.287.712t-.287.713t-.713.287M11 18H8q-.425 0-.712-.288T7 17t.288-.712T8 16h8q.425 0 .713.288T17 17t-.288.713T16 18h-3v3q0 .425-.288.713T12 22t-.712-.288T11 21z"></svg:path>`,
})
export class MaterialSymbolsSprinklerRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSprintIcon],svg[material-symbols-sprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.4 20L4 18.6L13.6 9H11v2H9V7h5.825q.4 0 .775.15t.65.425l3 2.975q.675.675 1.65 1.05t2.1.4v2q-1.55 0-2.812-.475T17.95 12.1l-1-1.05l-2.2 2.2L17 15.5l-6.55 3.775l-1-1.725l4.3-2.475l-1.7-1.7zM3 13v-2h5v2zm-2-3V8h5v2zm18.475-2q-.825 0-1.425-.587T17.45 6t.6-1.412T19.475 4t1.425.588T21.5 6t-.6 1.413T19.475 8M3 7V5h5v2z"></svg:path>`,
})
export class MaterialSymbolsSprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSprintRoundedIcon],svg[material-symbols-sprint-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.05 13.375L6.125 19.3q-.3.3-.712.3t-.713-.3t-.3-.712t.3-.713L13.6 9H11v1q0 .425-.288.713T10 11t-.712-.288T9 10V8q0-.425.288-.712T10 7h4.85q.4 0 .763.15t.637.425l3 2.975q.5.5 1.163.838t1.437.487q.425.075.738.388T22.9 13t-.35.7t-.775.225q-1.125-.15-2.075-.6T17.95 12.1l-1-1.05l-2.2 2.2l1.325 1.325q.35.35.288.838t-.488.737l-4.55 2.625q-.35.2-.762.1t-.613-.45t-.087-.763t.462-.612l3.425-1.975zM4 13q-.425 0-.712-.288T3 12t.288-.712T4 11h3q.425 0 .713.288T8 12t-.288.713T7 13zm-2-3q-.425 0-.712-.288T1 9t.288-.712T2 8h3q.425 0 .713.288T6 9t-.288.713T5 10zm17.475-2q-.825 0-1.425-.587T17.45 6t.6-1.412T19.475 4t1.425.588T21.5 6t-.6 1.413T19.475 8M4 7q-.425 0-.712-.288T3 6t.288-.712T4 5h3q.425 0 .713.288T8 6t-.288.713T7 7z"></svg:path>`,
})
export class MaterialSymbolsSprintRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSquareIcon],svg[material-symbols-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSquareDotIcon],svg[material-symbols-square-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2-2h14V5H5zm7-3q-1.65 0-2.825-1.175T8 12t1.175-2.825T12 8t2.825 1.175T16 12t-1.175 2.825T12 16"></svg:path>`,
})
export class MaterialSymbolsSquareDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSquareDotRoundedIcon],svg[material-symbols-square-dot-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm7-3q-1.65 0-2.825-1.175T8 12t1.175-2.825T12 8t2.825 1.175T16 12t-1.175 2.825T12 16"></svg:path>`,
})
export class MaterialSymbolsSquareDotRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSquareFootIcon],svg[material-symbols-square-foot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.2 21q-.925 0-1.562-.638T3 18.8V5.1q0-.725.675-1.012T4.85 4.3L7.1 6.55L5.75 7.9l.7.7L7.8 7.25l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2 2q.5.5.213 1.175T18.9 21zm.8-3h8.3L6 9.7z"></svg:path>`,
})
export class MaterialSymbolsSquareFootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSquareFootSharpIcon],svg[material-symbols-square-foot-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V2.45l4.1 4.1L5.75 7.9l.7.7L7.8 7.25l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35l2.6 2.6l-1.35 1.35l.7.7l1.35-1.35L21.55 21zm3-3h8.3L6 9.7z"></svg:path>`,
})
export class MaterialSymbolsSquareFootSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSquareOutlineIcon],svg[material-symbols-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zm2-2h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSquareOutlineRoundedIcon],svg[material-symbols-square-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsSquareOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSquareRoundedIcon],svg[material-symbols-square-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsSquareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSsidChartIcon],svg[material-symbols-ssid-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-6.2-6L3 17v-2.45l3-2.15l6.125 5.95L16.3 15H21v2h-4zm0-9L7.625 7.625L3 11V8.525L7.825 5L12.2 9.375L21 3v2.475z"></svg:path>`,
})
export class MaterialSymbolsSsidChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSsidChartRoundedIcon],svg[material-symbols-ssid-chart-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15.05q0-.25.113-.462t.312-.338l1.225-.875q.575-.425 1.3-.363t1.25.563l4.925 4.775l3.625-2.9q.275-.2.588-.325T17 15h3q.425 0 .713.288T21 16t-.288.713T20 17h-3l-3.625 2.9q-.575.475-1.338.438t-1.312-.563L5.8 15l-1.225.875q-.5.35-1.037.075T3 15.05m0-6.025q0-.25.1-.45t.3-.35L6.45 6q.6-.425 1.325-.375t1.25.575L12.2 9.375l7.225-5.225q.5-.35 1.038-.075t.537.9q0 .25-.112.45t-.313.35L13.375 11q-.6.425-1.325.375T10.8 10.8L7.625 7.625L4.575 9.85q-.5.35-1.038.075T3 9.025"></svg:path>`,
})
export class MaterialSymbolsSsidChartRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStabilizationIcon],svg[material-symbols-stabilization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20q-.6 0-1.162-.238q-.563-.237-.988-.662L4 14.1l1.325-1.15q.35-.3.8-.363q.45-.062.875.163l1.5.8V7.2q0-.7.525-1.2t1.225-.5q.075 0 .188.012q.112.013.187.038V5.5q0-.75.512-1.125Q11.65 4 12.25 4q.425 0 .8.2q.375.2.6.525q.15-.05.288-.088q.137-.037.312-.037q.7 0 1.213.487q.512.488.512 1.188v.175q.075-.025.138-.025h.137q.7 0 1.225.487Q18 7.4 18 8.1v9.4q0 1.05-.725 1.775Q16.55 20 15.5 20Zm0-1.5h4.5q.425 0 .712-.288q.288-.287.288-.712V8.175q0-.125-.062-.188q-.063-.062-.188-.062t-.188.062Q16 8.05 16 8.175V12h-1.5V6.35q0-.125-.062-.188q-.063-.062-.188-.062t-.188.062Q14 6.225 14 6.35V12h-1.5V5.75q0-.125-.062-.188q-.063-.062-.188-.062t-.188.062Q12 5.625 12 5.75V12h-1.5V7.25q0-.125-.062-.188Q10.375 7 10.25 7t-.188.062Q10 7.125 10 7.25V16l-3.7-1.925l-.125.125L9.9 18.05q.225.225.513.337q.287.113.587.113Zm-7.8 2.1q-.25.2-.55.15q-.3-.05-.5-.3l-2-2.675q-.15-.2-.15-.45t.15-.45L1.8 14.65l-1.65-2.2Q0 12.25 0 12t.15-.45L1.8 9.325l-1.65-2.2q-.15-.2-.15-.45t.15-.45l2-2.675q.2-.25.5-.3q.3-.05.55.15q.25.2.3.5q.05.3-.15.55L1.7 6.675L3.35 8.9q.15.2.15.45t-.15.45L1.7 12l1.65 2.225q.15.2.15.45t-.15.45L1.7 17.35l1.65 2.2q.2.25.15.55q-.05.3-.3.5Zm16.6.025q-.25-.2-.3-.5q-.05-.3.15-.55l1.65-2.225l-1.65-2.225q-.15-.2-.15-.45t.15-.45L21.3 12l-1.65-2.225q-.15-.2-.15-.45t.15-.45L21.3 6.65l-1.65-2.2q-.2-.25-.15-.55q.05-.3.3-.5t.55-.15q.3.05.5.3l2 2.675q.15.2.15.45t-.15.45L21.2 9.35l1.65 2.2q.15.2.15.45t-.15.45l-1.65 2.225l1.65 2.225q.15.2.15.45t-.15.45l-2 2.675q-.2.25-.5.3q-.3.05-.55-.15Z"></svg:path>`,
})
export class MaterialSymbolsStabilizationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStabilizationActionIcon],svg[material-symbols-stabilization-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 7.5q-.625 0-1.062-.438Q12 6.625 12 6t.438-1.062Q12.875 4.5 13.5 4.5t1.062.438Q15 5.375 15 6t-.438 1.062q-.437.438-1.062.438ZM13 20v-4.25l-1.275-1.175l-.675 2.975l-4.875-1.1L6.5 15l3.375.75l1.1-5.6l-1.475.6V13H8V9.75l4-1.65q.1-.05.75-.075q.225.05.425.163q.2.112.325.312l1.225 1.625q.5.65 1.213 1.012q.712.363 1.562.363V13q-1.275 0-2.325-.562q-1.05-.563-1.725-1.513L13 13.25l1.5 1.5V20Zm3 1v-2h3v-3h2v5ZM3 21v-5h2v3h3v2ZM3 8V3h5v2H5v3Zm16 0V5h-3V3h5v5Z"></svg:path>`,
})
export class MaterialSymbolsStabilizationActionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStabilizationLockIcon],svg[material-symbols-stabilization-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17q-.425 0-.712-.288Q8 16.425 8 16v-4.5q0-.425.288-.713q.287-.287.712-.287h.25V9.25q0-1.15.8-1.95T12 6.5q1.15 0 1.95.8t.8 1.95v1.25H15q.425 0 .713.287q.287.288.287.713V16q0 .425-.287.712Q15.425 17 15 17Zm1.75-6.5h2.5V9.25q0-.525-.363-.887Q12.525 8 12 8t-.887.363q-.363.362-.363.887ZM16 21v-2h3v-3h2v5ZM3 21v-5h2v3h3v2ZM3 8V3h5v2H5v3Zm16 0V5h-3V3h5v5Z"></svg:path>`,
})
export class MaterialSymbolsStabilizationLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStabilizationPanIcon],svg[material-symbols-stabilization-pan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 17l-1.4-1.4l2.575-2.6H6v-2h8.175L11.6 8.4L13 7l5 5Zm3 4v-2h3v-3h2v5ZM3 21v-5h2v3h3v2ZM3 8V3h5v2H5v3Zm16 0V5h-3V3h5v5Z"></svg:path>`,
})
export class MaterialSymbolsStabilizationPanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackIcon],svg[material-symbols-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14v2H4q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v2h-2V4H4v10zm4 8q-.825 0-1.412-.587T8 20V10q0-.825.588-1.412T10 8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22z"></svg:path>`,
})
export class MaterialSymbolsStackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackGroupIcon],svg[material-symbols-stack-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22q-.825 0-1.412-.587T8 20v-4H4q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v4h4q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22z"></svg:path>`,
})
export class MaterialSymbolsStackGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackGroupOutlineIcon],svg[material-symbols-stack-group-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22q-.825 0-1.412-.587T8 20v-4H4q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v4h4q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22zm0-2h10V10h-6V4H4v10h6zm2-8"></svg:path>`,
})
export class MaterialSymbolsStackGroupOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackGroupOutlineRoundedIcon],svg[material-symbols-stack-group-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22q-.825 0-1.412-.587T8 20v-4H4q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v4h4q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22zm0-2h10V10h-4q-.825 0-1.412-.587T14 8V4H4v10h4q.825 0 1.413.588T10 16zm2-8"></svg:path>`,
})
export class MaterialSymbolsStackGroupOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackGroupOutlineSharpIcon],svg[material-symbols-stack-group-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22v-6H2V2h14v6h6v14zm2-2h10V10h-6V4H4v10h6zm2-8"></svg:path>`,
})
export class MaterialSymbolsStackGroupOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackGroupSharpIcon],svg[material-symbols-stack-group-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22v-6H2V2h14v6h6v14z"></svg:path>`,
})
export class MaterialSymbolsStackGroupSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackHexagonIcon],svg[material-symbols-stack-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.7 21.875q-.825.125-1.487-.387T3.45 20.15L2.125 9.225q-.1-.825.4-1.475T3.85 7L5 6.85V15q0 1.65 1.175 2.825T9 19h9.3q-.15.6-.6 1.038t-1.1.512zM9 17q-.825 0-1.412-.587T7 15V4q0-.825.588-1.412T9 2h11q.825 0 1.413.588T22 4v11q0 .825-.587 1.413T20 17zm5.5-3.5l3.5-2v-4l-3.5-2l-3.5 2v4z"></svg:path>`,
})
export class MaterialSymbolsStackHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackHexagonOutlineIcon],svg[material-symbols-stack-hexagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 11.2l-1.5-.85v-1.7l1.5-.85l1.5.85v1.7zm0 2.3l3.5-2v-4l-3.5-2l-3.5 2v4zM12.7 19h5.6q-.175.65-.6 1.05t-1.1.5L5.7 21.875q-.825.125-1.488-.387T3.45 20.15L2.125 9.225q-.1-.825.4-1.475T3.85 7L5 6.85v2l-.9.125L5.45 19.9zM9 17q-.825 0-1.412-.587T7 15V4q0-.825.588-1.412T9 2h11q.825 0 1.413.588T22 4v11q0 .825-.587 1.413T20 17zm0-2h11V4H9zm-3.55 4.9"></svg:path>`,
})
export class MaterialSymbolsStackHexagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackHexagonOutlineRoundedIcon],svg[material-symbols-stack-hexagon-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 13.225l2.5-1.425q.225-.125.363-.363t.137-.512v-2.85q0-.275-.137-.512T17.5 7.2L15 5.775q-.225-.125-.5-.125t-.5.125L11.5 7.2q-.225.125-.363.363T11 8.075v2.85q0 .275.138.513t.362.362l2.5 1.425q.225.125.5.125t.5-.125M9 17q-.825 0-1.412-.587T7 15V4q0-.825.588-1.412T9 2h11q.825 0 1.413.588T22 4v11q0 .825-.587 1.413T20 17zm0-2h11V4H9zm-3.3 6.875q-.825.1-1.487-.4T3.45 20.15L2.125 9.225q-.1-.825.425-1.475t1.35-.775h.05q.425-.075.762.225t.338.75q0 .375-.262.65t-.638.35h-.025l1.35 10.95l11.85-1.45q.425-.05.75.2t.375.675t-.2.738t-.675.362zM14.5 11.2l-1.5-.85v-1.7l1.5-.85l1.5.85v1.7z"></svg:path>`,
})
export class MaterialSymbolsStackHexagonOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackHexagonOutlineSharpIcon],svg[material-symbols-stack-hexagon-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 13.5l3.5-2v-4l-3.5-2l-3.5 2v4zM12.825 19h5.425l.175 1.325l-14.725 1.8L1.85 7.2L5 6.85v2l-.9.125L5.45 19.9zM7 17V2h15v15zm2-2h11V4H9zm5.5-3.8l-1.5-.85v-1.7l1.5-.85l1.5.85v1.7z"></svg:path>`,
})
export class MaterialSymbolsStackHexagonOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackHexagonRoundedIcon],svg[material-symbols-stack-hexagon-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.7 21.875q-.825.125-1.487-.387T3.45 20.15L2.125 9.225q-.1-.825.4-1.475T3.85 7L5 6.85V15q0 1.65 1.175 2.825T9 19h9.3q-.15.6-.6 1.038t-1.1.512zM9 17q-.825 0-1.412-.587T7 15V4q0-.825.588-1.412T9 2h11q.825 0 1.413.588T22 4v11q0 .825-.587 1.413T20 17zm5-3.775q.225.125.5.125t.5-.125l2.5-1.425q.225-.125.363-.363t.137-.512v-2.85q0-.275-.137-.512T17.5 7.2L15 5.775q-.225-.125-.5-.125t-.5.125L11.5 7.2q-.225.125-.363.363T11 8.075v2.85q0 .275.138.513t.362.362z"></svg:path>`,
})
export class MaterialSymbolsStackHexagonRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackHexagonSharpIcon],svg[material-symbols-stack-hexagon-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 13.5l3.5-2v-4l-3.5-2l-3.5 2v4zM3.7 22.125L1.85 7.2L5 6.85V19h13.3l.125 1.325zM7 17V2h15v15z"></svg:path>`,
})
export class MaterialSymbolsStackHexagonSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackOffIcon],svg[material-symbols-stack-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19.15L10.85 8H20q.825 0 1.413.588T22 10zM14 6V4H6.85l-2-2H14q.825 0 1.413.588T16 4v2zm6.575 17.425L19.15 22H10q-.85 0-1.425-.575T8 20v-9.15l-4-4V14h2v2H4q-.85 0-1.425-.575T2 14V4.85L.575 3.425L2 2l20 20z"></svg:path>`,
})
export class MaterialSymbolsStackOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackOffOutlineIcon],svg[material-symbols-stack-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 19.15l-2-2V10h-7.15l-2-2H20q.825 0 1.413.588T22 10zM14 6V4H6.85l-2-2H14q.825 0 1.413.588T16 4v2zm-4 14h7.15L10 12.85zm10.575 3.425L19.15 22H10q-.85 0-1.425-.575T8 20v-9.15l-4-4V14h2v2H4q-.85 0-1.425-.575T2 14V4.85L.575 3.425L2 2l20 20zm-7-7"></svg:path>`,
})
export class MaterialSymbolsStackOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackOffOutlineRoundedIcon],svg[material-symbols-stack-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 19.15l-2-2V10h-7.15l-2-2H20q.825 0 1.413.588T22 10zM6.85 4l-2-2H14q.825 0 1.413.588T16 4v2h-2V4zM10 20h7.15L10 12.85zm0 2q-.85 0-1.425-.575T8 20v-9.15l-4-4V14h2v2H4q-.85 0-1.425-.575T2 14V4.85l-.725-.725q-.3-.3-.288-.712T1.3 2.7t.713-.3t.712.3L21.3 21.3q.3.3.3.7t-.3.7t-.712.3t-.713-.3l-.725-.7zm3.575-5.575"></svg:path>`,
})
export class MaterialSymbolsStackOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackOffOutlineSharpIcon],svg[material-symbols-stack-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 19.15l-2-2V10h-7.15l-2-2H22zM14 6V4H6.85l-2-2H16v4zm-4 14h7.15L10 12.85zm10.575 3.425L19.15 22H8V10.85l-4-4V14h2v2H2V4.85L.575 3.425L2 2l20 20zm-7-7"></svg:path>`,
})
export class MaterialSymbolsStackOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackOffRoundedIcon],svg[material-symbols-stack-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19.15L10.85 8H20q.825 0 1.413.588T22 10zM6.85 4l-2-2H14q.825 0 1.413.588T16 4v2h-2V4zM10 22q-.85 0-1.425-.575T8 20v-9.15l-4-4V14h2v2H4q-.85 0-1.425-.575T2 14V4.85l-.725-.725q-.3-.3-.288-.712T1.3 2.7t.713-.3t.712.3L21.3 21.3q.3.3.3.7t-.3.7t-.712.3t-.713-.3l-.725-.7z"></svg:path>`,
})
export class MaterialSymbolsStackOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackOffSharpIcon],svg[material-symbols-stack-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19.15L10.85 8H22zM14 6V4H6.85l-2-2H16v4zm6.575 17.425L19.15 22H8V10.85l-4-4V14h2v2H2V4.85L.575 3.425L2 2l20 20z"></svg:path>`,
})
export class MaterialSymbolsStackOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackOutlineIcon],svg[material-symbols-stack-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14v2H4q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v2h-2V4H4v10zm4 8q-.825 0-1.412-.587T8 20V10q0-.825.588-1.412T10 8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22zm0-2h10V10H10zm5-5"></svg:path>`,
})
export class MaterialSymbolsStackOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackOutlineRoundedIcon],svg[material-symbols-stack-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v1q0 .425-.288.713T15 6t-.712-.288T14 5V4H4v10h1q.425 0 .713.288T6 15t-.288.713T5 16zm6 6q-.825 0-1.412-.587T8 20V10q0-.825.588-1.412T10 8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22zm0-2h10V10H10zm5-5"></svg:path>`,
})
export class MaterialSymbolsStackOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackOutlineSharpIcon],svg[material-symbols-stack-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14v2H2V2h14v4h-2V4H4v10zm2 8V8h14v14zm2-2h10V10H10zm5-5"></svg:path>`,
})
export class MaterialSymbolsStackOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackRoundedIcon],svg[material-symbols-stack-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v1q0 .425-.288.713T15 6t-.712-.288T14 5V4H4v10h1q.425 0 .713.288T6 15t-.288.713T5 16zm6 6q-.825 0-1.412-.587T8 20V10q0-.825.588-1.412T10 8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22z"></svg:path>`,
})
export class MaterialSymbolsStackRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackSharpIcon],svg[material-symbols-stack-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14v2H2V2h14v4h-2V4H4v10zm2 8V8h14v14z"></svg:path>`,
})
export class MaterialSymbolsStackSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackStarIcon],svg[material-symbols-stack-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.725 18.5L15 17.125l2.275 1.375l-.6-2.6l2-1.725l-2.625-.225L15 11.5l-1.05 2.45l-2.625.225l2 1.725zM6 14v2H4q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v2h-2V4H4v10zm4 8q-.825 0-1.412-.587T8 20V10q0-.825.588-1.412T10 8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22z"></svg:path>`,
})
export class MaterialSymbolsStackStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackStarOutlineIcon],svg[material-symbols-stack-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.725 18.5L15 17.125l2.275 1.375l-.6-2.6l2-1.725l-2.625-.225L15 11.5l-1.05 2.45l-2.625.225l2 1.725zM6 14v2H4q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v2h-2V4H4v10zm4 8q-.825 0-1.412-.587T8 20V10q0-.825.588-1.412T10 8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22zm0-2h10V10H10zm5-5"></svg:path>`,
})
export class MaterialSymbolsStackStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackStarOutlineRoundedIcon],svg[material-symbols-stack-star-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 17.125l1.775 1.075q.15.1.288 0t.087-.275l-.475-2.025l1.55-1.325q.125-.125.075-.275t-.225-.175l-2.025-.175l-.825-1.925q-.05-.15-.225-.15t-.225.15l-.825 1.925l-2.025.175q-.175.025-.225.175t.075.275l1.55 1.325l-.475 2.025q-.05.175.088.275t.287 0zM4 16q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v1q0 .425-.288.713T15 6t-.712-.288T14 5V4H4v10h1q.425 0 .713.288T6 15t-.288.713T5 16zm6 6q-.825 0-1.412-.587T8 20V10q0-.825.588-1.412T10 8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22zm0-2h10V10H10zm5-5"></svg:path>`,
})
export class MaterialSymbolsStackStarOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackStarOutlineSharpIcon],svg[material-symbols-stack-star-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.725 18.5L15 17.125l2.275 1.375l-.6-2.6l2-1.725l-2.625-.225L15 11.5l-1.05 2.45l-2.625.225l2 1.725zM6 14v2H2V2h14v4h-2V4H4v10zm2 8V8h14v14zm2-2h10V10H10zm5-5"></svg:path>`,
})
export class MaterialSymbolsStackStarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackStarRoundedIcon],svg[material-symbols-stack-star-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 17.125l1.775 1.075q.15.1.288 0t.087-.275l-.475-2.025l1.55-1.325q.125-.125.075-.275t-.225-.175l-2.025-.175l-.825-1.925q-.05-.15-.225-.15t-.225.15l-.825 1.925l-2.025.175q-.175.025-.225.175t.075.275l1.55 1.325l-.475 2.025q-.05.175.088.275t.287 0zM4 16q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v1q0 .425-.288.713T15 6t-.712-.288T14 5V4H4v10h1q.425 0 .713.288T6 15t-.288.713T5 16zm6 6q-.825 0-1.412-.587T8 20V10q0-.825.588-1.412T10 8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22z"></svg:path>`,
})
export class MaterialSymbolsStackStarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackStarSharpIcon],svg[material-symbols-stack-star-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.725 18.5L15 17.125l2.275 1.375l-.6-2.6l2-1.725l-2.625-.225L15 11.5l-1.05 2.45l-2.625.225l2 1.725zM6 14v2H2V2h14v4h-2V4H4v10zm2 8V8h14v14z"></svg:path>`,
})
export class MaterialSymbolsStackStarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedBarChartIcon],svg[material-symbols-stacked-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V9h4v11zM4 8V4h4v4zm6 12v-8h4v8zm0-9V7h4v4zm6 9v-5h4v5zm0-6v-4h4v4z"></svg:path>`,
})
export class MaterialSymbolsStackedBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedBarChartRoundedIcon],svg[material-symbols-stacked-bar-chart-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20q-.425 0-.712-.288T4 19v-9q0-.425.288-.712T5 9h2q.425 0 .713.288T8 10v9q0 .425-.288.713T7 20zM5 8q-.425 0-.712-.288T4 7V5q0-.425.288-.712T5 4h2q.425 0 .713.288T8 5v2q0 .425-.288.713T7 8zm6 12q-.425 0-.712-.288T10 19v-6q0-.425.288-.712T11 12h2q.425 0 .713.288T14 13v6q0 .425-.288.713T13 20zm0-9q-.425 0-.712-.288T10 10V8q0-.425.288-.712T11 7h2q.425 0 .713.288T14 8v2q0 .425-.288.713T13 11zm6 9q-.425 0-.712-.288T16 19v-3q0-.425.288-.712T17 15h2q.425 0 .713.288T20 16v3q0 .425-.288.713T19 20zm0-6q-.425 0-.712-.288T16 13v-2q0-.425.288-.712T17 10h2q.425 0 .713.288T20 11v2q0 .425-.288.713T19 14z"></svg:path>`,
})
export class MaterialSymbolsStackedBarChartRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedEmailIcon],svg[material-symbols-stacked-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V6.5h2V19h16.5v2zm4-4q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm7-4.7l7-4.875V5l-7 4.85L7 5v2.425z"></svg:path>`,
})
export class MaterialSymbolsStackedEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedEmailOutlineIcon],svg[material-symbols-stacked-email-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm7-4.7L7 7.425V15h14V7.425zm0-2.45L21 5H7zM3 21q-.825 0-1.412-.587T1 19V6.5h2V19h16.5v2zM21 7.35V5H7v2.35V5h14z"></svg:path>`,
})
export class MaterialSymbolsStackedEmailOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedEmailOutlineRoundedIcon],svg[material-symbols-stacked-email-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm6.425-5.1L7 7.425V15h14V7.425L14.575 11.9q-.275.2-.575.2t-.575-.2M14 9.85L21 5H7zM3 21q-.825 0-1.412-.587T1 19V7.5q0-.425.288-.712T2 6.5t.713.288T3 7.5V19h15.5q.425 0 .713.288T19.5 20t-.288.713T18.5 21zM21 7.35V5H7v2.35V5h14z"></svg:path>`,
})
export class MaterialSymbolsStackedEmailOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedEmailOutlineSharpIcon],svg[material-symbols-stacked-email-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17V3h18v14zm9-4.725l-7-4.85V15h14V7.425zm0-2.425L21 5H7zM1 21V6.5h2V19h16.5v2zM21 5H7z"></svg:path>`,
})
export class MaterialSymbolsStackedEmailOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedEmailRoundedIcon],svg[material-symbols-stacked-email-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.425 11.9q.275.2.575.2t.575-.2L21 7.425V5l-7 4.85L7 5v2.425zM3 21q-.825 0-1.412-.587T1 19V7.5q0-.425.288-.712T2 6.5t.713.288T3 7.5V19h15.5q.425 0 .713.288T19.5 20t-.288.713T18.5 21zm4-4q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17z"></svg:path>`,
})
export class MaterialSymbolsStackedEmailRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedEmailSharpIcon],svg[material-symbols-stacked-email-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17V3h18v14zm-4 4V6.5h2V19h16.5v2zm13-8.725l7-4.85V5l-7 4.85L7 5v2.425z"></svg:path>`,
})
export class MaterialSymbolsStackedEmailSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedInboxIcon],svg[material-symbols-stacked-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm7-5q.825 0 1.413-.587T16 10h5V5H7v5h5q0 .825.588 1.413T14 12m5 9H3q-.825 0-1.412-.587T1 19V7h2v12h16z"></svg:path>`,
})
export class MaterialSymbolsStackedInboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedInboxOutlineIcon],svg[material-symbols-stacked-inbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm0-5v3h14v-3h-3.55q-.525.9-1.425 1.45T14 14t-2.025-.55T10.55 12zm7 0q.825 0 1.413-.587T16 10h5V5H7v5h5q0 .825.588 1.413T14 12m5 9H3q-.825 0-1.412-.587T1 19V7h2v12h16zM7 15h14z"></svg:path>`,
})
export class MaterialSymbolsStackedInboxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedInboxOutlineRoundedIcon],svg[material-symbols-stacked-inbox-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm0-5v3h14v-3h-3.55q-.525.9-1.425 1.45T14 14t-2.025-.55T10.55 12zm7 0q.65 0 1.175-.387t.725-.988q.05-.275.25-.45t.475-.175H21V5H7v5h4.375q.275 0 .475.175t.25.45q.2.6.725.988T14 12M3 21q-.825 0-1.412-.587T1 19V8q0-.425.288-.712T2 7t.713.288T3 8v11h15q.425 0 .713.288T19 20t-.288.713T18 21zm4-6h14z"></svg:path>`,
})
export class MaterialSymbolsStackedInboxOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedInboxOutlineSharpIcon],svg[material-symbols-stacked-inbox-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17V3h18v14zm2-5v3h14v-3h-3.55q-.525.9-1.425 1.45T14 14t-2.025-.55T10.55 12zm7 0q.825 0 1.413-.587T16 10h5V5H7v5h5q0 .825.588 1.413T14 12m5 9H1V7h2v12h16zM7 15h14z"></svg:path>`,
})
export class MaterialSymbolsStackedInboxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedInboxRoundedIcon],svg[material-symbols-stacked-inbox-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm7-5q.65 0 1.175-.387t.725-.988q.05-.275.25-.45t.475-.175H21V5H7v5h4.375q.275 0 .475.175t.25.45q.2.6.725.988T14 12M3 21q-.825 0-1.412-.587T1 19V8q0-.425.288-.712T2 7t.713.288T3 8v11h15q.425 0 .713.288T19 20t-.288.713T18 21z"></svg:path>`,
})
export class MaterialSymbolsStackedInboxRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedInboxSharpIcon],svg[material-symbols-stacked-inbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17V3h18v14zm9-5q.825 0 1.413-.587T16 10h5V5H7v5h5q0 .825.588 1.413T14 12m5 9H1V7h2v12h16z"></svg:path>`,
})
export class MaterialSymbolsStackedInboxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedLineChartIcon],svg[material-symbols-stacked-line-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 21.5L2 20l7.5-7.5l4 4l7.1-8L22 9.9l-8.5 9.6l-4-4zm0-6L2 14l7.5-7.5l4 4l7.1-8L22 3.9l-8.5 9.6l-4-4z"></svg:path>`,
})
export class MaterialSymbolsStackedLineChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedLineChartRoundedIcon],svg[material-symbols-stacked-line-chart-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.75 19.25l5.325-5.325q.575-.575 1.425-.575t1.425.575L13.5 16.5l6.4-7.225q.275-.325.713-.325t.737.3q.275.275.287.663t-.262.687L14.9 17.9q-.575.65-1.425.688T12 18l-2.5-2.5l-5.25 5.25q-.325.325-.75.325t-.75-.325t-.325-.75t.325-.75m0-6l5.325-5.325Q8.65 7.35 9.5 7.35t1.425.575L13.5 10.5l6.4-7.225q.275-.325.713-.325t.737.3q.275.275.287.662t-.262.688L14.9 11.9q-.575.65-1.425.688T12 12L9.5 9.5l-5.25 5.25q-.325.325-.75.325t-.75-.325t-.325-.75t.325-.75"></svg:path>`,
})
export class MaterialSymbolsStackedLineChartRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStacksIcon],svg[material-symbols-stacks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14L1 8l11-6l11 6zm0 4L1.575 12.325l2.1-1.15L12 15.725l8.325-4.55l2.1 1.15zm0 4L1.575 16.325l2.1-1.15L12 19.725l8.325-4.55l2.1 1.15z"></svg:path>`,
})
export class MaterialSymbolsStacksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStacksOutlineIcon],svg[material-symbols-stacks-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14L1 8l11-6l11 6zm0 4L1.575 12.325l2.1-1.15L12 15.725l8.325-4.55l2.1 1.15zm0 4L1.575 16.325l2.1-1.15L12 19.725l8.325-4.55l2.1 1.15zm0-10.275L18.825 8L12 4.275L5.175 8zM12 8"></svg:path>`,
})
export class MaterialSymbolsStacksOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStacksOutlineRoundedIcon],svg[material-symbols-stacks-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.725q-.25 0-.488-.062t-.462-.188l-8.45-4.6q-.275-.15-.388-.375T2.1 8t.113-.5t.387-.375l8.45-4.6q.225-.125.463-.188T12 2.275t.488.063t.462.187l8.45 4.6q.275.15.388.375t.112.5t-.112.5t-.388.375l-8.45 4.6q-.225.125-.462.188t-.488.062m0-2L18.825 8L12 4.275L5.175 8zm0 4l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 13.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087zm0 4l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 17.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087z"></svg:path>`,
})
export class MaterialSymbolsStacksOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStacksRoundedIcon],svg[material-symbols-stacks-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.725q-.25 0-.488-.062t-.462-.188l-8.45-4.6q-.275-.15-.388-.375T2.1 8t.113-.5t.387-.375l8.45-4.6q.225-.125.463-.188T12 2.275t.488.063t.462.187l8.45 4.6q.275.15.388.375t.112.5t-.112.5t-.388.375l-8.45 4.6q-.225.125-.462.188t-.488.062m0 2l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 13.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087zm0 4l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 17.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087z"></svg:path>`,
})
export class MaterialSymbolsStacksRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStadiaControllerIcon],svg[material-symbols-stadia-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.725 20q-1.5 0-2.562-1.075t-1.113-2.6q0-.225.025-.45t.075-.45l2.1-8.4q.35-1.35 1.425-2.187T7.125 4h9.75q1.375 0 2.45.838t1.425 2.187l2.1 8.4q.05.225.088.463t.037.462q0 1.525-1.088 2.588T19.276 20q-1.05 0-1.95-.55t-1.35-1.5l-.7-1.45q-.125-.25-.375-.375T14.375 16h-4.75q-.275 0-.525.125t-.375.375l-.7 1.45q-.45.95-1.35 1.5t-1.95.55m8.775-9q.425 0 .713-.288T14.5 10t-.288-.712T13.5 9t-.712.288T12.5 10t.288.713t.712.287m2-2q.425 0 .713-.288T16.5 8t-.288-.712T15.5 7t-.712.288T14.5 8t.288.713T15.5 9m0 4q.425 0 .713-.288T16.5 12t-.288-.712T15.5 11t-.712.288T14.5 12t.288.713t.712.287m2-2q.425 0 .713-.288T18.5 10t-.288-.712T17.5 9t-.712.288T16.5 10t.288.713t.712.287m-9 1.5q.325 0 .538-.213t.212-.537v-1h1q.325 0 .538-.213T11 10t-.213-.537t-.537-.213h-1v-1q0-.325-.213-.537T8.5 7.5t-.537.213t-.213.537v1h-1q-.325 0-.537.213T6 10t.213.538t.537.212h1v1q0 .325.213.538t.537.212"></svg:path>`,
})
export class MaterialSymbolsStadiaControllerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStadiaControllerOutlineIcon],svg[material-symbols-stadia-controller-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.725 20q-1.5 0-2.562-1.075t-1.113-2.6q0-.225.025-.45t.075-.45l2.1-8.4q.35-1.35 1.425-2.187T7.125 4h9.75q1.375 0 2.45.838t1.425 2.187l2.1 8.4q.05.225.088.463t.037.462q0 1.525-1.088 2.588T19.276 20q-1.05 0-1.95-.55t-1.35-1.5l-.7-1.45q-.125-.25-.375-.375T14.375 16h-4.75q-.275 0-.525.125t-.375.375l-.7 1.45q-.45.95-1.35 1.5t-1.95.55m.075-2q.475 0 .863-.25t.587-.675l.7-1.425q.375-.775 1.1-1.213T9.625 14h4.75q.85 0 1.575.45t1.125 1.2l.7 1.425q.2.425.588.675t.862.25q.7 0 1.2-.462t.525-1.163q0 .025-.05-.475l-2.1-8.375q-.175-.675-.7-1.1T16.875 6h-9.75q-.7 0-1.237.425t-.688 1.1L3.1 15.9q-.05.15-.05.45q0 .7.513 1.175T4.8 18m8.7-7q.425 0 .713-.287T14.5 10t-.288-.712T13.5 9t-.712.288T12.5 10t.288.713t.712.287m2-2q.425 0 .713-.288T16.5 8t-.288-.712T15.5 7t-.712.288T14.5 8t.288.713T15.5 9m0 4q.425 0 .713-.288T16.5 12t-.288-.712T15.5 11t-.712.288T14.5 12t.288.713t.712.287m2-2q.425 0 .713-.288T18.5 10t-.288-.712T17.5 9t-.712.288T16.5 10t.288.713t.712.287m-9 1.5q.325 0 .538-.213t.212-.537v-1h1q.325 0 .538-.213T11 10t-.213-.537t-.537-.213h-1v-1q0-.325-.213-.537T8.5 7.5t-.537.213t-.213.537v1h-1q-.325 0-.537.213T6 10t.213.538t.537.212h1v1q0 .325.213.538t.537.212M12 12"></svg:path>`,
})
export class MaterialSymbolsStadiaControllerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStadiaControllerSharpIcon],svg[material-symbols-stadia-controller-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.725 20q-1.575 0-2.6-1.1Q1.1 17.8 1.05 16.325q0-.2.025-.45t.075-.45l2.1-8.4Q3.6 5.7 4.688 4.85Q5.775 4 7.125 4h9.75q1.35 0 2.437.85q1.088.85 1.438 2.175l2.1 8.4q.05.225.088.462q.037.238.037.463q0 1.5-1.062 2.575Q20.85 20 19.275 20q-1.05 0-1.95-.55q-.9-.55-1.35-1.5l-.7-1.45q-.125-.275-.362-.387q-.238-.113-.538-.113h-4.75q-.3 0-.537.113q-.238.112-.363.387l-.7 1.45q-.45.95-1.35 1.5q-.9.55-1.95.55Zm.075-2q.425 0 .813-.225q.387-.225.637-.7l.7-1.425q.375-.775 1.087-1.212Q8.75 14 9.625 14h4.75q.85 0 1.575.45t1.125 1.2l.7 1.425q.25.475.638.7q.387.225.812.225q.65 0 1.175-.45t.55-1.175v-.238q0-.112-.05-.237l-2.1-8.375q-.175-.675-.7-1.1Q17.575 6 16.875 6h-9.75q-.7 0-1.237.425q-.538.425-.688 1.1L3.1 15.9q-.05.15-.05.45q0 .725.55 1.188q.55.462 1.2.462Zm8.7-7q-.425 0-.712-.288q-.288-.287-.288-.712t.288-.713Q13.075 9 13.5 9t.713.287q.287.288.287.713t-.287.712Q13.925 11 13.5 11Zm2-2q-.425 0-.712-.288Q14.5 8.425 14.5 8t.288-.713Q15.075 7 15.5 7t.712.287q.288.288.288.713t-.288.712Q15.925 9 15.5 9Zm0 4q-.425 0-.712-.288q-.288-.287-.288-.712t.288-.713Q15.075 11 15.5 11t.712.287q.288.288.288.713t-.288.712Q15.925 13 15.5 13Zm2-2q-.425 0-.712-.288q-.288-.287-.288-.712t.288-.713Q17.075 9 17.5 9t.712.287q.288.288.288.713t-.288.712Q17.925 11 17.5 11Zm-9 1.5q-.3 0-.525-.225q-.225-.225-.225-.525v-1h-1q-.3 0-.525-.225Q6 10.3 6 10q0-.3.225-.525q.225-.225.525-.225h1v-1q0-.3.225-.525Q8.2 7.5 8.5 7.5q.3 0 .525.225q.225.225.225.525v1h1q.3 0 .525.225Q11 9.7 11 10q0 .3-.225.525q-.225.225-.525.225h-1v1q0 .3-.225.525q-.225.225-.525.225Z"></svg:path>`,
})
export class MaterialSymbolsStadiaControllerSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStadiumIcon],svg[material-symbols-stadium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7V3l4 2zm15 0V3l4 2zm-7-1V2l4 2zM9 21.875q-1.3-.125-2.55-.375t-2.238-.612t-1.6-.838T2 19v-9q0-.625.788-1.162t2.137-.95t3.175-.65T12 7t3.9.238t3.175.65t2.138.95T22 10v9q0 .575-.612 1.05t-1.6.838t-2.238.612t-2.55.375V17H9zM12 11q2.425 0 4.188-.288T19 10.05q0-.125-1.9-.587T12 9t-5.1.463t-1.9.587q1.05.375 2.812.663T12 11"></svg:path>`,
})
export class MaterialSymbolsStadiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStadiumOutlineIcon],svg[material-symbols-stadium-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7V3l4 2zm15 0V3l4 2zm-7-1V2l4 2zm0 16q-1.9-.05-3.537-.312t-2.85-.663T2.7 20.1T2 19v-9q0-.625.788-1.162t2.137-.95t3.175-.65T12 7t3.9.238t3.175.65t2.138.95T22 10v9q0 .575-.7 1.1t-1.912.925t-2.85.663T13 22v-4h-2zm1-11q2.425 0 4.188-.288T19 10.05q0-.125-1.9-.587T12 9t-5.1.463t-1.9.587q1.05.375 2.812.663T12 11m-3 8.85V16h6v3.85q2-.2 3.275-.587T20 18.575V11.8q-1.375.55-3.45.875T12 13t-4.55-.325T4 11.8v6.775q.45.3 1.725.688T9 19.85m3-4.025"></svg:path>`,
})
export class MaterialSymbolsStadiumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStadiumOutlineRoundedIcon],svg[material-symbols-stadium-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.2V3.8q0-.275.238-.425t.487-.025L6.1 4.55q.275.125.275.45t-.275.45l-2.375 1.2q-.25.125-.488-.025T3 6.2m15 0V3.8q0-.275.238-.425t.487-.025l2.375 1.2q.275.125.275.45t-.275.45l-2.375 1.2q-.25.125-.488-.025T18 6.2m-7-1V2.8q0-.275.238-.425t.487-.025l2.375 1.2q.275.125.275.45t-.275.45l-2.375 1.2q-.25.125-.487-.025T11 5.2m-.85 16.775q-3.5-.2-5.825-1.037T2 19v-9q0-.625.788-1.162t2.137-.95t3.175-.65T12 7t3.9.238t3.175.65t2.138.95T22 10v9q0 1.125-2.337 1.95t-5.838 1.025q-.35.025-.587-.213T13 21.176V18h-2v3.15q0 .35-.25.6t-.6.225M12 11q2.425 0 4.188-.288T19 10.05q0-.125-1.9-.587T12 9t-5.1.463t-1.9.587q1.05.375 2.812.663T12 11m-3 8.85V18q0-.825.588-1.412T11 16h2q.825 0 1.413.588T15 18v1.85q2-.2 3.275-.587T20 18.575V11.8q-1.375.55-3.45.875T12 13t-4.55-.325T4 11.8v6.775q.45.3 1.725.688T9 19.85m3-4.025"></svg:path>`,
})
export class MaterialSymbolsStadiumOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStadiumRoundedIcon],svg[material-symbols-stadium-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.2V3.8q0-.275.238-.425t.487-.025L6.1 4.55q.275.125.275.45t-.275.45l-2.375 1.2q-.25.125-.488-.025T3 6.2m15 0V3.8q0-.275.238-.425t.487-.025l2.375 1.2q.275.125.275.45t-.275.45l-2.375 1.2q-.25.125-.488-.025T18 6.2m-7-1V2.8q0-.275.238-.425t.487-.025l2.375 1.2q.275.125.275.45t-.275.45l-2.375 1.2q-.25.125-.487-.025T11 5.2M8.4 21.8q-2.45-.275-4.425-.987T2 19v-9q0-.625.788-1.162t2.137-.95t3.175-.65T12 7t3.9.238t3.175.65t2.138.95T22 10v9q0 1.125-1.987 1.838t-4.438.987q-.225.025-.4-.137T15 21.3V20q0-1.25-.875-2.125T12 17t-2.125.875T9 20v1.275q0 .25-.175.4T8.4 21.8M12 11q2.425 0 4.187-.288T19 10.05q0-.125-1.9-.587T12 9t-5.1.463t-1.9.587q1.05.375 2.812.663T12 11"></svg:path>`,
})
export class MaterialSymbolsStadiumRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStairsIcon],svg[material-symbols-stairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h4.425v-3.325H13V11.35h2.575V8H18V6h-4.425v3.325H11v3.325H8.425V16H6zm-1 3q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsStairsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStairs2Icon],svg[material-symbols-stairs-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19v-2h6v-6h6V5h8v2h-6v6h-6v6z"></svg:path>`,
})
export class MaterialSymbolsStairs2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStairs2RoundedIcon],svg[material-symbols-stairs-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19q-.425 0-.712-.288T2 18t.288-.712T3 17h5v-5q0-.425.288-.712T9 11h5V6q0-.425.288-.712T15 5h6q.425 0 .713.288T22 6t-.288.713T21 7h-5v5q0 .425-.288.713T15 13h-5v5q0 .425-.288.713T9 19z"></svg:path>`,
})
export class MaterialSymbolsStairs2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStairsOutlineIcon],svg[material-symbols-stairs-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h4.425v-3.325H13V11.35h2.575V8H18V6h-4.425v3.325H11v3.325H8.425V16H6zm-1 3q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsStairsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStairsOutlineRoundedIcon],svg[material-symbols-stairs-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 14.675H12q.425 0 .713-.288t.287-.712V11.35h1.575q.425 0 .713-.287t.287-.713V8H17q.425 0 .713-.287T18 7t-.288-.712T17 6h-2.425q-.425 0-.712.288T13.574 7v2.325H12q-.425 0-.712.288t-.288.712v2.325H9.425q-.425 0-.712.288t-.288.712V16H7q-.425 0-.712.288T6 17t.288.713T7 18h2.425q.425 0 .713-.288t.287-.712zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"></svg:path>`,
})
export class MaterialSymbolsStairsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStairsOutlineSharpIcon],svg[material-symbols-stairs-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h4.425v-3.325H13V11.35h2.575V8H18V6h-4.425v3.325H11v3.325H8.425V16H6zm-3 3V3h18v18zm2-2h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsStairsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStairsRoundedIcon],svg[material-symbols-stairs-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.425 14.675H12q.425 0 .713-.288t.287-.712V11.35h1.575q.425 0 .713-.287t.287-.713V8H17q.425 0 .713-.287T18 7t-.288-.712T17 6h-2.425q-.425 0-.712.288T13.574 7v2.325H12q-.425 0-.712.288t-.288.712v2.325H9.425q-.425 0-.712.288t-.288.712V16H7q-.425 0-.712.288T6 17t.288.713T7 18h2.425q.425 0 .713-.288t.287-.712zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"></svg:path>`,
})
export class MaterialSymbolsStairsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStairsSharpIcon],svg[material-symbols-stairs-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h4.425v-3.325H13V11.35h2.575V8H18V6h-4.425v3.325H11v3.325H8.425V16H6zm-3 3V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsStairsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarIcon],svg[material-symbols-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"></svg:path>`,
})
export class MaterialSymbolsStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarHalfIcon],svg[material-symbols-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.15 16.85l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4v7.8zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"></svg:path>`,
})
export class MaterialSymbolsStarHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarHalfOutlineIcon],svg[material-symbols-star-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.925l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"></svg:path>`,
})
export class MaterialSymbolsStarHalfOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarHalfRoundedIcon],svg[material-symbols-star-half-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.125v7.8l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325zm0 10.15l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></svg:path>`,
})
export class MaterialSymbolsStarHalfRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarOutlineIcon],svg[material-symbols-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275zM12 12.25"></svg:path>`,
})
export class MaterialSymbolsStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarOutlineRoundedIcon],svg[material-symbols-star-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15zm0-5.025"></svg:path>`,
})
export class MaterialSymbolsStarOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarRateIcon],svg[material-symbols-star-rate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"></svg:path>`,
})
export class MaterialSymbolsStarRateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarRateHalfIcon],svg[material-symbols-star-rate-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.9v5.9l2.4 1.85l-.9-3.05l2.25-1.6h-2.8zM5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z"></svg:path>`,
})
export class MaterialSymbolsStarRateHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarRateHalfRoundedIcon],svg[material-symbols-star-rate-half-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.9v5.9l2.4 1.85l-.9-3.05l2.25-1.6h-2.8zm0 8.4l-3.7 2.825q-.275.225-.6.213t-.575-.188t-.387-.475t-.013-.65L8.15 13.4l-3.625-2.575q-.3-.2-.375-.525t.025-.6t.35-.488t.6-.212H9.6l1.45-4.8q.125-.35.388-.538T12 3.475t.563.188t.387.537L14.4 9h4.475q.35 0 .6.213t.35.487t.025.6t-.375.525L15.85 13.4l1.425 4.625q.125.35-.012.65t-.388.475t-.575.188t-.6-.213z"></svg:path>`,
})
export class MaterialSymbolsStarRateHalfRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarRateOutlineIcon],svg[material-symbols-star-rate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.6 15.65L12 13.8l2.4 1.85l-.9-3.05l2.25-1.6h-2.8L12 7.9l-.95 3.1h-2.8l2.25 1.6zM5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3zM12 11.775"></svg:path>`,
})
export class MaterialSymbolsStarRateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarRateOutlineRoundedIcon],svg[material-symbols-star-rate-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.6 15.65L12 13.8l2.4 1.85l-.9-3.05l2.25-1.6h-2.8L12 7.9l-.95 3.1h-2.8l2.25 1.6zm2.4.65l-3.7 2.825q-.275.225-.6.213t-.575-.188t-.387-.475t-.013-.65L8.15 13.4l-3.625-2.575q-.3-.2-.375-.525t.025-.6t.35-.488t.6-.212H9.6l1.45-4.8q.125-.35.388-.538T12 3.475t.563.188t.387.537L14.4 9h4.475q.35 0 .6.213t.35.487t.025.6t-.375.525L15.85 13.4l1.425 4.625q.125.35-.012.65t-.388.475t-.575.188t-.6-.213zm0-4.525"></svg:path>`,
})
export class MaterialSymbolsStarRateOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarRateRoundedIcon],svg[material-symbols-star-rate-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16.3l-3.7 2.825q-.275.225-.6.213t-.575-.188t-.387-.475t-.013-.65L8.15 13.4l-3.625-2.575q-.3-.2-.375-.525t.025-.6t.35-.488t.6-.212H9.6l1.45-4.8q.125-.35.388-.538T12 3.475t.563.188t.387.537L14.4 9h4.475q.35 0 .6.213t.35.487t.025.6t-.375.525L15.85 13.4l1.425 4.625q.125.35-.012.65t-.388.475t-.575.188t-.6-.213z"></svg:path>`,
})
export class MaterialSymbolsStarRateRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarRoundedIcon],svg[material-symbols-star-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></svg:path>`,
})
export class MaterialSymbolsStarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarShineIcon],svg[material-symbols-star-shine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.3 18.7l-3-3l1.4-1.4l3 3zm-3.6-12l-1.4-1.4l3-3l1.4 1.4zm-11.4 0l-3-3l1.4-1.4l3 3zm-3.6 12l-1.4-1.4l3-3l1.4 1.4zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"></svg:path>`,
})
export class MaterialSymbolsStarShineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarShineOutlineIcon],svg[material-symbols-star-shine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.3 18.7l-3-3l1.4-1.4l3 3zm-3.6-12l-1.4-1.4l3-3l1.4 1.4zm-11.4 0l-3-3l1.4-1.4l3 3zm-3.6 12l-1.4-1.4l3-3l1.4 1.4zm6.15-1.875l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275zM12 11.975"></svg:path>`,
})
export class MaterialSymbolsStarShineOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarShineOutlineRoundedIcon],svg[material-symbols-star-shine-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15q.3-.3.713-.3t.712.3L22 16.6q.3.3.3.7t-.3.7t-.7.3t-.7-.3L19 16.425q-.3-.3-.3-.712T19 15m1-12q.3.3.3.713t-.3.712L18.425 6q-.3.3-.712.3T17 6t-.3-.712t.3-.713L18.6 3q.3-.3.7-.3t.7.3M4 3q.3-.3.713-.3t.712.3L7 4.6q.3.3.3.7T7 6t-.712.3t-.713-.3L4 4.425q-.3-.3-.3-.712T4 3m1 12q.3.3.3.713t-.3.712L3.425 18q-.3.3-.712.3T2 18t-.3-.712t.3-.713L3.6 15q.3-.3.7-.3t.7.3m3.85 1.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></svg:path>`,
})
export class MaterialSymbolsStarShineOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarShineRoundedIcon],svg[material-symbols-star-shine-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15q.3-.3.713-.3t.712.3L22 16.6q.3.3.3.7t-.3.7t-.7.3t-.7-.3L19 16.425q-.3-.3-.3-.712T19 15m1-12q.3.3.3.713t-.3.712L18.425 6q-.3.3-.712.3T17 6t-.3-.712t.3-.713L18.6 3q.3-.3.7-.3t.7.3M4 3q.3-.3.713-.3t.712.3L7 4.6q.3.3.3.7T7 6t-.712.3t-.713-.3L4 4.425q-.3-.3-.3-.712T4 3m1 12q.3.3.3.713t-.3.712L3.425 18q-.3.3-.712.3T2 18t-.3-.712t.3-.713L3.6 15q.3-.3.7-.3t.7.3m7 2.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></svg:path>`,
})
export class MaterialSymbolsStarShineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarsIcon],svg[material-symbols-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 18l4-3.05L16 18l-1.5-4.95l4-2.85h-4.9L12 5l-1.6 5.2H5.5l4 2.85zm4 4q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsStarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStars2Icon],svg[material-symbols-stars-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275zM17.25 7l.525-2.225L16 3.3l2.35-.2l.9-2.1l.9 2.1l2.35.2l-1.775 1.475L21.25 7l-2-1.175z"></svg:path>`,
})
export class MaterialSymbolsStars2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStars2OutlineIcon],svg[material-symbols-stars-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275zM17.25 7l.525-2.225L16 3.3l2.35-.2l.9-2.1l.9 2.1l2.35.2l-1.775 1.475L21.25 7l-2-1.175zM12 11.975"></svg:path>`,
})
export class MaterialSymbolsStars2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStars2OutlineRoundedIcon],svg[material-symbols-stars-2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15zm7.25-11.45l-1.5.875q-.15.075-.288-.013t-.087-.262l.4-1.65l-1.325-1.1q-.125-.125-.075-.262t.225-.163l1.75-.15l.675-1.575q.05-.15.225-.15t.225.15L20.15 3.1l1.75.15q.175.025.225.163t-.075.262l-1.325 1.1l.4 1.65q.05.175-.087.263t-.288.012zM12 11.975"></svg:path>`,
})
export class MaterialSymbolsStars2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStars2RoundedIcon],svg[material-symbols-stars-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15zm7.25-11.45l-1.5.875q-.15.075-.288-.012t-.087-.263l.4-1.65l-1.325-1.1q-.125-.125-.075-.262t.225-.163l1.75-.15l.675-1.575q.05-.15.225-.15t.225.15L20.15 3.1l1.75.15q.175.025.225.163t-.075.262l-1.325 1.1l.4 1.65q.05.175-.087.263t-.288.012z"></svg:path>`,
})
export class MaterialSymbolsStars2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarsOutlineIcon],svg[material-symbols-stars-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 18l4-3.05L16 18l-1.5-4.95l4-2.85h-4.9L12 5l-1.6 5.2H5.5l4 2.85zm4 4q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></svg:path>`,
})
export class MaterialSymbolsStarsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarsOutlineRoundedIcon],svg[material-symbols-stars-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.95l2.775 2.1q.3.2.6.013t.175-.538L14.5 13.05l2.725-1.95q.3-.225.175-.563t-.475-.337H13.6l-1.125-3.65Q12.35 6.2 12 6.2t-.475.35L10.4 10.2H7.075q-.35 0-.475.338t.175.562L9.5 13.05l-1.05 3.475q-.125.35.175.538t.6-.013zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4T6.337 6.338T4 12t2.338 5.663T12 20"></svg:path>`,
})
export class MaterialSymbolsStarsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStarsRoundedIcon],svg[material-symbols-stars-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14.95l2.775 2.1q.3.2.6.013t.175-.538L14.5 13.05l2.725-1.95q.3-.225.175-.563t-.475-.337H13.6l-1.125-3.65Q12.35 6.2 12 6.2t-.475.35L10.4 10.2H7.075q-.35 0-.475.338t.175.562L9.5 13.05l-1.05 3.475q-.125.35.175.538t.6-.013zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsStarsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStartIcon],svg[material-symbols-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18V6h2v12zm14 0l-1.425-1.4l3.6-3.6H6v-2h12.175L14.6 7.4L16 6l6 6z"></svg:path>`,
})
export class MaterialSymbolsStartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStartRoundedIcon],svg[material-symbols-start-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18q-.425 0-.712-.288T2 17V7q0-.425.288-.712T3 6t.713.288T4 7v10q0 .425-.288.713T3 18m15.175-5H7q-.425 0-.712-.288T6 12t.288-.712T7 11h11.175L15.3 8.1q-.275-.275-.288-.687T15.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.275T15.3 17.3q-.3-.3-.3-.712t.3-.713z"></svg:path>`,
})
export class MaterialSymbolsStartRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat0Icon],svg[material-symbols-stat-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19l-7-7l7-7l7 7z"></svg:path>`,
})
export class MaterialSymbolsStat0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat0OutlineIcon],svg[material-symbols-stat-0-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19l-7-7l7-7l7 7zm0-2.85L16.15 12L12 7.85L7.85 12zM12 12"></svg:path>`,
})
export class MaterialSymbolsStat0OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat0OutlineRoundedIcon],svg[material-symbols-stat-0-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.575 17.575l-4.15-4.15q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l4.15-4.15q.3-.3.675-.45t.75-.15t.75.15t.675.45l4.15 4.15q.3.3.45.675t.15.75t-.15.75t-.45.675l-4.15 4.15q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45M12 16.15L16.15 12L12 7.85L7.85 12zM12 12"></svg:path>`,
})
export class MaterialSymbolsStat0OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat0RoundedIcon],svg[material-symbols-stat-0-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.575 17.575l-4.15-4.15q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l4.15-4.15q.3-.3.675-.45t.75-.15t.75.15t.675.45l4.15 4.15q.3.3.45.675t.15.75t-.15.75t-.45.675l-4.15 4.15q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45"></svg:path>`,
})
export class MaterialSymbolsStat0RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat1Icon],svg[material-symbols-stat-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.4 15.375l-1.4-1.4l6-6l6 6l-1.4 1.4L12 10.8z"></svg:path>`,
})
export class MaterialSymbolsStat1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat1RoundedIcon],svg[material-symbols-stat-1-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10.8l-3.9 3.875q-.275.275-.687.288t-.713-.288q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213T12 8.4t.375.063t.325.212l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"></svg:path>`,
})
export class MaterialSymbolsStat1RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat2Icon],svg[material-symbols-stat-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.4 18.4L6 17l6-6l6 6l-1.4 1.4l-4.6-4.575zm0-6L6 11l6-6l6 6l-1.4 1.4L12 7.825z"></svg:path>`,
})
export class MaterialSymbolsStat2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat2RoundedIcon],svg[material-symbols-stat-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.825L8.1 17.7q-.275.275-.687.288T6.7 17.7q-.275-.275-.275-.7t.275-.7l3.875-3.875q.575-.575 1.425-.575t1.425.575L17.3 16.3q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6L8.1 11.7q-.275.275-.687.288T6.7 11.7q-.275-.275-.275-.7t.275-.7l3.875-3.875Q11.15 5.85 12 5.85t1.425.575L17.3 10.3q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"></svg:path>`,
})
export class MaterialSymbolsStat2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat3Icon],svg[material-symbols-stat-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.4 21.375l-1.4-1.4l6-6l6 6l-1.4 1.4L12 16.8zm0-6l-1.4-1.4l6-6l6 6l-1.4 1.4L12 10.8zm0-6L6 7.975l6-6l6 6l-1.4 1.4L12 4.8z"></svg:path>`,
})
export class MaterialSymbolsStat3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStat3RoundedIcon],svg[material-symbols-stat-3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16.8l-3.9 3.875q-.275.275-.687.288t-.713-.288q-.275-.275-.275-.7t.275-.7l3.875-3.875q.575-.575 1.425-.575t1.425.575l3.875 3.875q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6l-3.9 3.875q-.275.275-.687.288t-.713-.288q-.275-.275-.275-.7t.275-.7L10.575 9.4q.575-.575 1.425-.575t1.425.575l3.875 3.875q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6L8.1 8.675q-.275.275-.687.288T6.7 8.675q-.275-.275-.275-.7t.275-.7L10.575 3.4q.575-.575 1.425-.575t1.425.575L17.3 7.275q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"></svg:path>`,
})
export class MaterialSymbolsStat3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStatMinus1Icon],svg[material-symbols-stat-minus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.375l-6-6l1.4-1.4L12 12.55l4.6-4.575l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsStatMinus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStatMinus1RoundedIcon],svg[material-symbols-stat-minus-1-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.95q-.2 0-.375-.062t-.325-.213l-4.6-4.6q-.275-.275-.288-.687t.288-.713q.275-.275.7-.275t.7.275L12 12.55l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213T12 14.95"></svg:path>`,
})
export class MaterialSymbolsStatMinus1RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStatMinus2Icon],svg[material-symbols-stat-minus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19l-6-6l1.4-1.4l4.6 4.575l4.6-4.575L18 13zm0-6L6 7l1.4-1.4l4.6 4.575L16.6 5.6L18 7z"></svg:path>`,
})
export class MaterialSymbolsStatMinus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStatMinus2RoundedIcon],svg[material-symbols-stat-minus-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-3.875 3.875q-.575.575-1.425.575t-1.425-.575L6.7 13.7q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-3.875 3.875q-.575.575-1.425.575t-1.425-.575L6.7 7.7q-.275-.275-.288-.687T6.7 6.3q.275-.275.7-.275t.7.275z"></svg:path>`,
})
export class MaterialSymbolsStatMinus2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStatMinus3Icon],svg[material-symbols-stat-minus-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21.925l-6-6l1.4-1.4L12 19.1l4.6-4.575l1.4 1.4zm0-5.95l-6-6l1.4-1.4L12 13.15l4.6-4.575l1.4 1.4zm0-5.95l-6-6l1.4-1.4L12 7.2l4.6-4.575l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsStatMinus3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStatMinus3RoundedIcon],svg[material-symbols-stat-minus-3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19.1l3.9-3.875q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7L13.425 20.5q-.575.575-1.425.575t-1.425-.575L6.7 16.625q-.275-.275-.288-.687t.288-.713q.275-.275.7-.275t.7.275zm0-5.95l3.9-3.875q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-3.875 3.875q-.575.575-1.425.575t-1.425-.575L6.7 10.675q-.275-.275-.288-.687t.288-.713Q6.975 9 7.4 9t.7.275zm0-5.95l3.9-3.875q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7L13.425 8.6q-.575.575-1.425.575T10.575 8.6L6.7 4.725q-.275-.275-.288-.687t.288-.713q.275-.275.7-.275t.7.275z"></svg:path>`,
})
export class MaterialSymbolsStatMinus3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStatefulIcon],svg[material-symbols-stateful-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-6q0-.825.588-1.413Q3.175 14 4 14h3q.825 0 1.412.587Q9 15.175 9 16v6H8l-1-1H4l-1 1Zm2.75-2h1.5v-1.75H8v-1.5H6.25V15h-1.5v1.75H3v1.5h1.75ZM15 22v-6q0-.825.588-1.413Q16.175 14 17 14h3q.825 0 1.413.587Q22 15.175 22 16v6h-1l-1-1h-3l-1 1Zm2.75-2h1.5v-1.75H21v-1.5h-1.75V15h-1.5v1.75H16v1.5h1.75ZM8.5 10V4q0-.825.588-1.413Q9.675 2 10.5 2h3q.825 0 1.413.587q.587.588.587 1.413v6h-1l-1-1h-3l-1 1Zm2.75-2h1.5V6.25h1.75v-1.5h-1.75V3h-1.5v1.75H9.5v1.5h1.75ZM11 19q-.2 0-.35-.15q-.15-.15-.15-.35q0-.2.15-.35q.15-.15.35-.15h2q.2 0 .35.15q.15.15.15.35q0 .2-.15.35q-.15.15-.35.15Zm-3.85-5.95Q7 12.9 7 12.7q0-.2.15-.35l1.4-1.4q.15-.15.363-.15q.212 0 .362.15t.15.35q0 .2-.15.35l-1.425 1.4q-.15.15-.35.15q-.2 0-.35-.15Zm9 0l-1.425-1.4q-.15-.15-.15-.35q0-.2.15-.35q.15-.15.363-.15q.212 0 .362.15l1.4 1.4q.15.15.15.35q0 .2-.15.35q-.15.15-.35.15q-.2 0-.35-.15Z"></svg:path>`,
})
export class MaterialSymbolsStatefulIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStayCurrentLandscapeIcon],svg[material-symbols-stay-current-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h18q.825 0 1.413.588T23 7v10q0 .825-.587 1.413T21 19zm3-2h12V7H6z"></svg:path>`,
})
export class MaterialSymbolsStayCurrentLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStayCurrentLandscapeOutlineIcon],svg[material-symbols-stay-current-landscape-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h18q.825 0 1.413.588T23 7v10q0 .825-.587 1.413T21 19zm1-2V7H3v10zm2 0h12V7H6zm14 0h1V7h-1zM4 7H3zm16 0h1z"></svg:path>`,
})
export class MaterialSymbolsStayCurrentLandscapeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStayCurrentLandscapeOutlineSharpIcon],svg[material-symbols-stay-current-landscape-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19V5h22v14zm3-2V7H3v10zm2 0h12V7H6zm14 0h1V7h-1zM4 7H3zm16 0h1z"></svg:path>`,
})
export class MaterialSymbolsStayCurrentLandscapeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStayCurrentLandscapeSharpIcon],svg[material-symbols-stay-current-landscape-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19V5h22v14zm5-2h12V7H6z"></svg:path>`,
})
export class MaterialSymbolsStayCurrentLandscapeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStayCurrentPortraitOutlineSharpIcon],svg[material-symbols-stay-current-portrait-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 23V1h14v22H5Zm2-5h10V6H7v12Zm0 3h10v-1H7v1ZM7 4h10V3H7v1Zm0 0V3v1Zm0 17v-1v1Z"></svg:path>`,
})
export class MaterialSymbolsStayCurrentPortraitOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStayPrimaryLandscapeSharpIcon],svg[material-symbols-stay-primary-landscape-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19V5h22v14Zm5-2h12V7H6Zm-3 0h1V7H3Zm17 0h1V7h-1ZM3 17V7h1v10Zm17 0V7h1v10Z"></svg:path>`,
})
export class MaterialSymbolsStayPrimaryLandscapeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSteeringWheelHeatIcon],svg[material-symbols-steering-wheel-heat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.025 9.55l-1.65-1.1l.325-.525q.15-.225.225-.462T21 6.95q0-.35-.125-.675T20.5 5.7q-.525-.525-.812-1.213T19.4 3.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T23 6.95q0 .575-.162 1.1t-.463 1zm-4.2 0l-1.65-1.1l.325-.525q.15-.225.225-.462t.075-.513q0-.35-.125-.675T16.3 5.7q-.525-.525-.812-1.213T15.2 3.05q0-.575.163-1.1t.462-1l.325-.5l1.675 1.1l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18.8 6.95q0 .575-.162 1.1t-.463 1zM13 19.925q2.725-.35 4.65-2.275T19.925 13H16l-3 3.75zm.65-10.375l-1.675-1.1l.35-.525q.15-.225.225-.462t.075-.513q0-.35-.138-.675T12.1 5.7q-.525-.525-.812-1.213T11 3.05q0-.575.15-1.1t.475-1l.35-.5l1.675 1.1l-.35.525q-.15.2-.225.45T13 3.05q0 .35.125.675t.375.575q.525.525.813 1.213T14.6 6.95q0 .575-.162 1.1t-.463 1zM4.075 13q.35 2.725 2.275 4.65T11 19.925V16.75L8 13zm0-2H21.95q.025.25.038.5T22 12q0 2.075-.787 3.9t-2.138 3.175t-3.175 2.138T12 22t-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-3.375 1.975-5.988T9 2.45V4.6q-1.975.8-3.312 2.488T4.075 11"></svg:path>`,
})
export class MaterialSymbolsSteeringWheelHeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSteeringWheelHeatRoundedIcon],svg[material-symbols-steering-wheel-heat-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6.95q0-.35-.125-.675T20.5 5.7q-.525-.525-.812-1.213T19.4 3.05q0-.575.163-1.1t.462-1l.325-.5q.225-.35.638-.425t.762.15t.425.625t-.15.75l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T23 6.95q0 .575-.162 1.1t-.463 1l-.35.5q-.225.35-.625.425t-.75-.15t-.425-.625t.15-.75l.325-.525q.15-.225.225-.462T21 6.95m-4.2 0q0-.35-.125-.675T16.3 5.7q-.525-.525-.813-1.213T15.2 3.05q0-.575.163-1.1t.462-1l.325-.5q.225-.35.638-.425t.762.15t.425.625t-.15.75l-.35.525q-.15.225-.213.463t-.062.512q0 .35.125.675t.375.575q.525.525.813 1.213T18.8 6.95q0 .575-.162 1.1t-.463 1q-.275.4-.175.25t-.175.25q-.225.35-.625.425t-.75-.15t-.425-.625t.15-.75l.325-.525q.15-.225.225-.462t.075-.513M13 19.925q2.725-.35 4.65-2.275T19.925 13H16l-3 3.75zM12.625 6.95q0-.35-.137-.675T12.1 5.7q-.525-.525-.812-1.213T11 3.05q0-.575.15-1.1t.475-1l.35-.5q.225-.35.638-.425t.762.15T13.8.8t-.15.75l-.35.525q-.15.2-.225.45T13 3.05q0 .35.125.675t.375.575q.525.525.813 1.213T14.6 6.95q0 .575-.162 1.1t-.463 1l-.325.5q-.225.35-.637.425t-.763-.15t-.425-.625t.15-.75l.35-.525q.15-.225.225-.462t.075-.513M4.075 13q.35 2.725 2.275 4.65T11 19.925V16.75L8 13zM2 12q0-2.925 1.513-5.288T7.45 3.1q.4-.2.738-.038t.512.513t.088.738t-.588.662q-1.65.9-2.762 2.463T4.075 11h16.75q.5 0 .838.325t.337.825q-.025 2.025-.813 3.812t-2.137 3.125t-3.163 2.125T12 22t-3.9-.788t-3.175-2.137T2.788 15.9T2 12"></svg:path>`,
})
export class MaterialSymbolsSteeringWheelHeatRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepIcon],svg[material-symbols-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15q-1.275 0-2.137-.862T16 12t.863-2.137T19 9t2.138.863T22 12t-.862 2.138T19 15M9 17l-1.4-1.425L10.175 13H2v-2h8.175L7.6 8.4L9 7l5 5z"></svg:path>`,
})
export class MaterialSymbolsStepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepIntoIcon],svg[material-symbols-step-into-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-1.25 0-2.125-.875T9 19t.875-2.125T12 16t2.125.875T15 19t-.875 2.125T12 22m0-8L7 9l1.4-1.4l2.6 2.575V2h2v8.175L15.575 7.6L17 9z"></svg:path>`,
})
export class MaterialSymbolsStepIntoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepIntoRoundedIcon],svg[material-symbols-step-into-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-1.25 0-2.125-.875T9 19t.875-2.125T12 16t2.125.875T15 19t-.875 2.125T12 22m-1-11.825V3q0-.425.288-.712T12 2t.713.288T13 3v7.175L14.875 8.3q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L12.7 13.3q-.3.3-.7.3t-.7-.3L7.7 9.7q-.275-.275-.288-.687T7.7 8.3q.275-.275.7-.275t.7.275z"></svg:path>`,
})
export class MaterialSymbolsStepIntoRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepOutIcon],svg[material-symbols-step-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-1.25 0-2.125-.875T9 19t.875-2.125T12 16t2.125.875T15 19t-.875 2.125T12 22m-1-8V5.825L8.4 8.4L7 7l5-5l5 5l-1.425 1.4L13 5.825V14z"></svg:path>`,
})
export class MaterialSymbolsStepOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepOutRoundedIcon],svg[material-symbols-step-out-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-1.25 0-2.125-.875T9 19t.875-2.125T12 16t2.125.875T15 19t-.875 2.125T12 22M11 5.825L9.1 7.7q-.275.275-.687.287T7.7 7.7q-.275-.275-.275-.7t.275-.7l3.6-3.6q.3-.3.7-.3t.7.3l3.6 3.6q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288L13 5.825V13q0 .425-.288.713T12 14t-.712-.288T11 13z"></svg:path>`,
})
export class MaterialSymbolsStepOutRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepOverIcon],svg[material-symbols-step-over-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-1.25 0-2.125-.875T9 16t.875-2.125T12 13t2.125.875T15 16t-.875 2.125T12 19m-7.925-7q.35-2.975 2.6-4.988T11.975 5q1.825 0 3.375.738T18 7.75V5h2v7h-7v-2h4.2q-.8-1.35-2.162-2.175T12 7Q9.8 7 8.125 8.425T6.1 12z"></svg:path>`,
})
export class MaterialSymbolsStepOverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepOverRoundedIcon],svg[material-symbols-step-over-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-1.25 0-2.125-.875T9 16t.875-2.125T12 13t2.125.875T15 16t-.875 2.125T12 19m5.2-9q-.8-1.35-2.162-2.175T12 7q-1.925 0-3.45 1.1t-2.175 2.825q-.15.425-.462.75T5.175 12q-.45 0-.725-.363t-.15-.787Q5 8.3 7.113 6.65T11.975 5q1.825 0 3.375.738T18 7.75V6q0-.425.288-.712T19 5t.713.288T20 6v5q0 .425-.288.713T19 12h-5q-.425 0-.712-.288T13 11t.288-.712T14 10z"></svg:path>`,
})
export class MaterialSymbolsStepOverRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepRoundedIcon],svg[material-symbols-step-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15q-1.275 0-2.137-.862T16 12t.863-2.137T19 9t2.138.863T22 12t-.862 2.138T19 15m-8.825-2H3q-.425 0-.712-.288T2 12t.288-.712T3 11h7.175L8.3 9.1q-.275-.275-.288-.687T8.3 7.7q.275-.275.7-.275t.7.275l3.6 3.6q.3.3.3.7t-.3.7l-3.6 3.6q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7z"></svg:path>`,
})
export class MaterialSymbolsStepRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSteppersIcon],svg[material-symbols-steppers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9t2.125.875T8 12t-.875 2.125T5 15m0-2q.425 0 .713-.288T6 12t-.288-.712T5 11t-.712.288T4 12t.288.713T5 13m7 2q-1.25 0-2.125-.875T9 12t.875-2.125T12 9t2.125.875T15 12t-.875 2.125T12 15m0-2q.425 0 .713-.288T13 12t-.288-.712T12 11t-.712.288T11 12t.288.713T12 13m7 2q-1.25 0-2.125-.875T16 12t.875-2.125T19 9t2.125.875T22 12t-.875 2.125T19 15"></svg:path>`,
})
export class MaterialSymbolsSteppersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepsIcon],svg[material-symbols-steps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.4 9.5H2.2q.1-.35.263-.663t.387-.612l3.85-5.15q.425-.575 1.138-.763t1.362.163l.7.35q.525.275.813.75T11 4.625v2.1l1.85-.475q.75-.2 1.45.188t.95 1.112l1.625 4.9l4.25 4.25q.5.5.688 1.075T22 19q0 .925-.5 1.65t-1.3 1.075L8.85 10.875q-.725-.675-1.6-1.025T5.4 9.5M14.15 22q-.75 0-1.425-.275t-1.25-.775L3.35 13.575q-.475-.425-.775-.962T2.15 11.5H5.4q.575 0 1.113.2t.962.625L17.575 22z"></svg:path>`,
})
export class MaterialSymbolsStepsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepsOutlineIcon],svg[material-symbols-steps-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.4 9.5q.975 0 1.85.35t1.6 1.025L18.4 20h.6q.425 0 .713-.288T20 19q0-.2-.038-.425t-.262-.45l-4.575-4.575L13.35 8.2l-1.85.45q-.95.25-1.725-.35T9 6.725v-2.1l-.7-.35l-3.85 5.15q-.025.025-.025.037T4.4 9.5zm0 2H4.25q.075.175.188.325t.262.275l8.1 7.375q.275.275.625.4t.725.125h1.35l-8.025-7.675q-.425-.425-.962-.625T5.4 11.5M14.15 22q-.75 0-1.425-.275t-1.25-.775L3.35 13.575Q2.2 12.525 2.062 11t.788-2.775l3.85-5.15q.425-.575 1.138-.763t1.362.163l.7.35q.525.275.813.75T11 4.625v2.1l1.85-.475q.75-.2 1.45.188t.95 1.112l1.625 4.9l4.25 4.25q.5.5.688 1.075T22 19q0 1.25-.875 2.125T19 22z"></svg:path>`,
})
export class MaterialSymbolsStepsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepsOutlineSharpIcon],svg[material-symbols-steps-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.4 20h1.325L20 18.425l-4.875-4.875L13.35 8.2l-3.325.75L9 7.975v-3.35l-.7-.35L4.4 9.5h3zm-5.025 0H15.5l-8.9-8.5H4.05zm-.75 2L.675 11.15L7.7 1.725l3.3 1.65v3.35l3.675-.95l2.2 6.675L22 17.575L21.25 22z"></svg:path>`,
})
export class MaterialSymbolsStepsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepsSharpIcon],svg[material-symbols-steps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 22L7.4 9.5H1.9l5.8-7.775l3.3 1.65V6.65l3.675-.875l2.2 6.675L22 17.575L21.25 22zm-7.875 0L1.075 11.5h5.55L17.575 22z"></svg:path>`,
})
export class MaterialSymbolsStepsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStethoscopeIcon],svg[material-symbols-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 22q-2.7 0-4.6-1.9T7 15.5v-.575q-2.15-.35-3.575-2.013T2 9V3h3V2h2v4H5V5H4v4q0 1.65 1.175 2.825T8 13t2.825-1.175T12 9V5h-1v1H9V2h2v1h3v6q0 2.25-1.425 3.913T9 14.925v.575q0 1.875 1.313 3.188T13.5 20t3.188-1.312T18 15.5v-1.675q-.875-.3-1.437-1.075T16 11q0-1.25.875-2.125T19 8t2.125.875T22 11q0 .975-.562 1.75T20 13.825V15.5q0 2.7-1.9 4.6T13.5 22"></svg:path>`,
})
export class MaterialSymbolsStethoscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStethoscopeArrowIcon],svg[material-symbols-stethoscope-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 21l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 14.4L18 13l4 4zm-4.5 1q-2.7 0-4.6-1.9T7 15.5v-.575q-2.15-.35-3.575-2.013T2 9V3h3V2h2v4H5V5H4v4q0 1.65 1.175 2.825T8 13t2.825-1.175T12 9V5h-1v1H9V2h2v1h3v6q0 2.25-1.425 3.913T9 14.925v.575q0 1.875 1.313 3.188T13.5 20z"></svg:path>`,
})
export class MaterialSymbolsStethoscopeArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStethoscopeArrowRoundedIcon],svg[material-symbols-stethoscope-arrow-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18q-.425 0-.712-.288T14 17t.288-.712T15 16h3.175l-.875-.875q-.275-.3-.288-.712t.288-.713t.7-.3t.7.3l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.3.3-.7.3t-.7-.3t-.288-.712t.288-.713l.875-.875zm-2 4q-2.575 0-4.288-1.925T7 15.5v-.575q-2.15-.35-3.575-2.013T2 9V4q0-.425.288-.712T3 3h2q0-.425.288-.712T6 2t.713.288T7 3v2q0 .425-.288.713T6 6t-.712-.288T5 5H4v4q0 1.65 1.175 2.825T8 13t2.825-1.175T12 9V5h-1q0 .425-.288.713T10 6t-.712-.288T9 5V3q0-.425.288-.712T10 2t.713.288T11 3h2q.425 0 .713.288T14 4v5q0 2.25-1.425 3.913T9 14.925v.575q0 1.8 1.138 3.15T13 20q.425 0 .713.288T14 21t-.288.713T13 22"></svg:path>`,
})
export class MaterialSymbolsStethoscopeArrowRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStethoscopeCheckIcon],svg[material-symbols-stethoscope-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.35 21l-3.55-3.55l1.425-1.4l2.125 2.125l4.25-4.25L23 15.35zm-3.85 1q-2.7 0-4.6-1.9T7 15.5v-.575q-2.15-.35-3.575-2.013T2 9V3h3V2h2v4H5V5H4v4q0 1.65 1.175 2.825T8 13t2.825-1.175T12 9V5h-1v1H9V2h2v1h3v6q0 2.25-1.425 3.913T9 14.925v.575q0 1.875 1.313 3.188T13.5 20z"></svg:path>`,
})
export class MaterialSymbolsStethoscopeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStethoscopeCheckRoundedIcon],svg[material-symbols-stethoscope-check-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.625 20.3L14.5 18.175q-.275-.3-.275-.712t.3-.713t.7-.3t.7.3l1.425 1.425l3.525-3.55q.3-.3.713-.3t.712.3t.3.713t-.3.712l-4.25 4.25q-.3.3-.712.3t-.713-.3M13 22q-2.575 0-4.288-1.925T7 15.5v-.575q-2.15-.35-3.575-2.013T2 9V4q0-.425.288-.712T3 3h2q0-.425.288-.712T6 2t.713.288T7 3v2q0 .425-.288.713T6 6t-.712-.288T5 5H4v4q0 1.65 1.175 2.825T8 13t2.825-1.175T12 9V5h-1q0 .425-.288.713T10 6t-.712-.288T9 5V3q0-.425.288-.712T10 2t.713.288T11 3h2q.425 0 .713.288T14 4v5q0 2.25-1.425 3.913T9 14.925v.575q0 1.8 1.138 3.15T13 20q.425 0 .713.288T14 21t-.288.713T13 22"></svg:path>`,
})
export class MaterialSymbolsStethoscopeCheckRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStethoscopeOutlineIcon],svg[material-symbols-stethoscope-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 22q-2.7 0-4.6-1.9T7 15.5v-.575q-2.15-.35-3.575-2.013T2 9V3h3V2h2v4H5V5H4v4q0 1.65 1.175 2.825T8 13t2.825-1.175T12 9V5h-1v1H9V2h2v1h3v6q0 2.25-1.425 3.913T9 14.925v.575q0 1.875 1.313 3.188T13.5 20t3.188-1.312T18 15.5v-1.675q-.875-.3-1.437-1.075T16 11q0-1.25.875-2.125T19 8t2.125.875T22 11q0 .975-.562 1.75T20 13.825V15.5q0 2.7-1.9 4.6T13.5 22M19 12q.425 0 .713-.288T20 11t-.288-.712T19 10t-.712.288T18 11t.288.713T19 12m0-1"></svg:path>`,
})
export class MaterialSymbolsStethoscopeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStethoscopeOutlineRoundedIcon],svg[material-symbols-stethoscope-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 22q-2.7 0-4.6-1.9T7 15.5v-.575q-2.15-.35-3.575-2.013T2 9V4q0-.425.288-.712T3 3h2q0-.425.288-.712T6 2t.713.288T7 3v2q0 .425-.288.713T6 6t-.712-.288T5 5H4v4q0 1.65 1.175 2.825T8 13t2.825-1.175T12 9V5h-1q0 .425-.288.713T10 6t-.712-.288T9 5V3q0-.425.288-.712T10 2t.713.288T11 3h2q.425 0 .713.288T14 4v5q0 2.25-1.425 3.913T9 14.925v.575q0 1.875 1.313 3.188T13.5 20t3.188-1.312T18 15.5v-1.675q-.875-.325-1.437-1.088T16 11q0-1.25.875-2.125T19 8t2.125.875T22 11q0 .975-.562 1.738T20 13.825V15.5q0 2.7-1.9 4.6T13.5 22M19 12q.425 0 .713-.288T20 11t-.288-.712T19 10t-.712.288T18 11t.288.713T19 12m0-1"></svg:path>`,
})
export class MaterialSymbolsStethoscopeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStethoscopeRoundedIcon],svg[material-symbols-stethoscope-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 22q-2.7 0-4.6-1.9T7 15.5v-.575q-2.15-.35-3.575-2.013T2 9V4q0-.425.288-.712T3 3h2q0-.425.288-.712T6 2t.713.288T7 3v2q0 .425-.288.713T6 6t-.712-.288T5 5H4v4q0 1.65 1.175 2.825T8 13t2.825-1.175T12 9V5h-1q0 .425-.288.713T10 6t-.712-.288T9 5V3q0-.425.288-.712T10 2t.713.288T11 3h2q.425 0 .713.288T14 4v5q0 2.25-1.425 3.913T9 14.925v.575q0 1.875 1.313 3.188T13.5 20t3.188-1.312T18 15.5v-1.675q-.875-.325-1.437-1.088T16 11q0-1.25.875-2.125T19 8t2.125.875T22 11q0 .975-.562 1.738T20 13.825V15.5q0 2.7-1.9 4.6T13.5 22"></svg:path>`,
})
export class MaterialSymbolsStethoscopeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNoteIcon],svg[material-symbols-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v11l-5 5zm6-5h2v-6h3V8H8v2h3zm4 3l4-4h-2q-.825 0-1.412.588T15 17z"></svg:path>`,
})
export class MaterialSymbolsStickyNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNote2Icon],svg[material-symbols-sticky-note-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v10l-6 6zm9-2l5-5h-5zm-7-5h5v-2H7zm0-4h10V8H7z"></svg:path>`,
})
export class MaterialSymbolsStickyNote2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNote2OutlineIcon],svg[material-symbols-sticky-note-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h9v-5h5V5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v10l-6 6zm2-7v-2h5v2zm0-4V8h10v2zm-2 9V5z"></svg:path>`,
})
export class MaterialSymbolsStickyNote2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNote2OutlineRoundedIcon],svg[material-symbols-sticky-note-2-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h9v-4q0-.425.288-.712T15 14h4V5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v9.175q0 .4-.15.763t-.425.637l-4.85 4.85q-.275.275-.637.425t-.763.15zm6-7H8q-.425 0-.712-.288T7 13t.288-.712T8 12h3q.425 0 .713.288T12 13t-.288.713T11 14m5-4H8q-.425 0-.712-.288T7 9t.288-.712T8 8h8q.425 0 .713.288T17 9t-.288.713T16 10M5 19V5z"></svg:path>`,
})
export class MaterialSymbolsStickyNote2OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNote2OutlineSharpIcon],svg[material-symbols-sticky-note-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h9v-5h5V5H5zm-2 2V3h18v12l-6 6zm4-7v-2h5v2zm0-4V8h10v2zm-2 9V5z"></svg:path>`,
})
export class MaterialSymbolsStickyNote2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNote2RoundedIcon],svg[material-symbols-sticky-note-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 19l5-5h-4q-.425 0-.712.288T14 15zm-9 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v9.175q0 .4-.15.763t-.425.637l-4.85 4.85q-.275.275-.637.425t-.763.15zm3-7h3q.425 0 .713-.288T12 13t-.288-.712T11 12H8q-.425 0-.712.288T7 13t.288.713T8 14m0-4h8q.425 0 .713-.288T17 9t-.288-.712T16 8H8q-.425 0-.712.288T7 9t.288.713T8 10"></svg:path>`,
})
export class MaterialSymbolsStickyNote2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNote2SharpIcon],svg[material-symbols-sticky-note-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14h-5v5zM3 21V3h18v12l-6 6zm4-7h5v-2H7zm0-4h10V8H7z"></svg:path>`,
})
export class MaterialSymbolsStickyNote2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNoteOutlineIcon],svg[material-symbols-sticky-note-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v11zm-1-2v-2q0-.825.588-1.412T17 15h2V5H5v14zm-4-3h2v-6h3V8H8v2h3zm-6 3V5z"></svg:path>`,
})
export class MaterialSymbolsStickyNoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNoteOutlineRoundedIcon],svg[material-symbols-sticky-note-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v10.175q0 .4-.15.763t-.425.637l-3.85 3.85q-.275.275-.638.425t-.762.15zm10-2v-2q0-.825.588-1.412T17 15h2V5H5v14zm-4-9v5q0 .425.288.713T12 16t.713-.288T13 15v-5h2q.425 0 .713-.288T16 9t-.288-.712T15 8H9q-.425 0-.712.288T8 9t.288.713T9 10zm-6 9V5z"></svg:path>`,
})
export class MaterialSymbolsStickyNoteOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNoteOutlineSharpIcon],svg[material-symbols-sticky-note-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21H3V3h18v13zm-1-2v-4h4V5H5v14zm-4-3h2v-6h3V8H8v2h3zm-6 3V5z"></svg:path>`,
})
export class MaterialSymbolsStickyNoteOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNoteRoundedIcon],svg[material-symbols-sticky-note-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v10.175q0 .4-.15.763t-.425.637l-3.85 3.85q-.275.275-.638.425t-.762.15zm10-2l4-4h-2q-.825 0-1.412.588T15 17zm-3-3q.425 0 .713-.288T13 15v-5h2q.425 0 .713-.288T16 9t-.288-.712T15 8H9q-.425 0-.712.288T8 9t.288.713T9 10h2v5q0 .425.288.713T12 16"></svg:path>`,
})
export class MaterialSymbolsStickyNoteRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStickyNoteSharpIcon],svg[material-symbols-sticky-note-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 21H3V3h18v13zm-1-2l4-4h-4zm-4-3h2v-6h3V8H8v2h3z"></svg:path>`,
})
export class MaterialSymbolsStickyNoteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockMediaIcon],svg[material-symbols-stock-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15q-.825 0-1.412-.587T2 13V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v9q0 .825-.587 1.413T13 15zm4-3.75L6.8 9.6L5 12h7L9.7 9zM17 22q-1.25 0-2.125-.875T14 19t.875-2.125T17 16q.275 0 .513.05t.487.125V11h4v2h-2v6q0 1.25-.875 2.125T17 22"></svg:path>`,
})
export class MaterialSymbolsStockMediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockMediaOutlineIcon],svg[material-symbols-stock-media-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15q-.825 0-1.412-.587T2 13V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v9q0 .825-.587 1.413T13 15zm0-2h9V4H4zm4-1.75L6.8 9.6L5 12h7L9.7 9zM17 22q-1.25 0-2.125-.875T14 19t.875-2.125T17 16q.275 0 .513.05t.487.125V11h4v2h-2v6q0 1.25-.875 2.125T17 22M4 13V4z"></svg:path>`,
})
export class MaterialSymbolsStockMediaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockMediaOutlineRoundedIcon],svg[material-symbols-stock-media-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15q-.825 0-1.412-.587T2 13V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v9q0 .825-.587 1.413T13 15zm0-2h9V4H4zm4-1.75L7 9.875q-.075-.1-.2-.1t-.2.1L5.3 11.6q-.1.125-.025.263T5.5 12h6q.15 0 .225-.138T11.7 11.6L9.9 9.25q-.075-.1-.2-.1t-.2.1zM17 22q-1.25 0-2.125-.875T14 19t.875-2.125T17 16q.275 0 .513.05t.487.125V12q0-.425.288-.712T19 11h2q.425 0 .713.288T22 12t-.288.713T21 13h-1v6q0 1.25-.875 2.125T17 22M4 13V4z"></svg:path>`,
})
export class MaterialSymbolsStockMediaOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockMediaOutlineSharpIcon],svg[material-symbols-stock-media-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15V2h13v13zm2-2h9V4H4zm4-1.75L6.8 9.6L5 12h7L9.7 9zM17 22q-1.25 0-2.125-.875T14 19t.875-2.125T17 16q.275 0 .513.05t.487.125V11h4v2h-2v6q0 1.25-.875 2.125T17 22M4 13V4z"></svg:path>`,
})
export class MaterialSymbolsStockMediaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockMediaRoundedIcon],svg[material-symbols-stock-media-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15q-.825 0-1.412-.587T2 13V4q0-.825.588-1.412T4 2h9q.825 0 1.413.588T15 4v9q0 .825-.587 1.413T13 15zm4-3.75L7 9.875q-.075-.1-.2-.1t-.2.1L5.3 11.6q-.1.125-.025.263T5.5 12h6q.15 0 .225-.138T11.7 11.6L9.9 9.25q-.075-.1-.2-.1t-.2.1zM17 22q-1.25 0-2.125-.875T14 19t.875-2.125T17 16q.275 0 .513.05t.487.125V12q0-.425.288-.712T19 11h2q.425 0 .713.288T22 12t-.288.713T21 13h-1v6q0 1.25-.875 2.125T17 22"></svg:path>`,
})
export class MaterialSymbolsStockMediaRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockMediaSharpIcon],svg[material-symbols-stock-media-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15V2h13v13zm6-3.75L6.8 9.6L5 12h7L9.7 9zM17 22q-1.25 0-2.125-.875T14 19t.875-2.125T17 16q.275 0 .513.05t.487.125V11h4v2h-2v6q0 1.25-.875 2.125T17 22"></svg:path>`,
})
export class MaterialSymbolsStockMediaSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockpotIcon],svg[material-symbols-stockpot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20q-1.25 0-2.125-.875T3 17V8h18v9q0 1.25-.875 2.125T18 20zM3 7V5h6V4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4v1h6v2z"></svg:path>`,
})
export class MaterialSymbolsStockpotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStockpotOutlineIcon],svg[material-symbols-stockpot-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8h18v9q0 1.25-.875 2.125T18 20H6q-1.25 0-2.125-.875T3 17zm2 2v7q0 .425.288.713T6 18h12q.425 0 .713-.288T19 17v-7zM3 7V5h6V4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4v1h6v2zm9 7"></svg:path>`,
})
export class MaterialSymbolsStockpotOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
